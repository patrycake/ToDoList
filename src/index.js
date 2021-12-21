import componentCreater, {
    createListComponent,
    createListsHeaderComponent,
    createItemComponent,
    createItemsHeaderComponent
} from "./components";
import {
    list,
    item
} from "./todo";
import './style.css'

const objController = (() => {
    const defaultList = list("default", "Where all items are saved");
    defaultList.addItem( item("defaultItem", "defaultItemDescription"))
    let listArr = [defaultList];
    const addList = (newList) => {
        newList != "-1" ? listArr.push(newList) : "";
        console.log(newList.getName())
    }
    const getLists = () => {
        return listArr;
    }
    const addItem = (inputList = "-1", inputItem) => {
        defaultList.addItem(inputItem);
        if (listArr.includes(inputList)) {
            listArr[listArr.indexOf(inputList)].addItem(inputItem)
        }
    }
    const getItems = (parentList) => {
        return parentList.getItems()
    }
    return {
        addList,
        getLists,
        addItem, 
        getItems
    }
})();

const domController = (() => {
    const setUpMainList = () => {
        createListsHeaderComponent.listAddButt.addEventListener("click", () => {
            document.getElementById("modal-list").classList.add("active")
        })
        document.getElementById("close-form-list").addEventListener("click", function(){
            document.getElementById("modal-list").classList.remove("active")
        })
        const divAllLists = document.createElement("div")
        divAllLists.id = "lists-all-container"
        divAllLists.hidden = false;
        document.getElementById("lists").appendChild(createListsHeaderComponent.listHeaderComp)
        document.getElementById("lists").appendChild(divAllLists)

    }
    const setUpMainItem = (parentList) => {
        const divItemComp = document.getElementById("items")
        // divItemComp.innerHTML = ""
        const divAllItems = document.createElement("div")
        divAllItems.id = "items-all-container"
        divAllItems.hidden = false;
        divItemComp.appendChild(createItemsHeaderComponent(parentList, parentList.numItems(), "item-header-container"))
        divItemComp.appendChild(divAllItems)
        document.getElementById("add-item-button").addEventListener("click", () => {
            document.getElementById("modal-item").classList.add("active")
        })
        document.getElementById("close-form-item").addEventListener("click", function(){
            document.getElementById("modal-item").classList.remove("active")
        })
    }

    const populateLists = () => {
        const divListsComp = document.getElementById("lists-all-container")
        divListsComp.innerHTML = ""
        objController.getLists().forEach(onelist => {
            const listContainer = createListComponent(onelist, onelist.numItems(), "list-container")
            listContainer.addEventListener("click", function () {
                document.getElementById("lists").hidden = true;
                setUpMainItem(onelist)
                populateItems(onelist)
            })
            divListsComp.appendChild(listContainer)
        })
    }
    const populateItems = (parentList) => {
        const divItemsComp = document.getElementById("items-all-container")
        divItemsComp.hidden = false;
        divItemsComp.innerHTML = "";
        parentList.getItems().forEach(item => {
            const itemsComponent = createItemComponent(item)
            divItemsComp.appendChild(itemsComponent)
        })
    }

    function formSubmitList(event) {
        event.preventDefault();
        document.getElementById("modal-list").classList.remove("active")
        const listForm = document.getElementById("list-form")
        objController.addList(list(listForm.elements['list-name'].value, listForm.elements['list-description'].value))
        populateLists()
    }

    const formSubmitItem = (event) => {
        event.preventDefault();
        console.log(event)
        document.getElementById("modal-item").classList.remove("active")
        const itemForm = document.getElementById("item-form")
        objController.addItem(document.getElementById("add-item-button").parent, item(itemForm.elements['item-name'].value, itemForm.elements['item-description'].value))
        populateItems(document.getElementById("add-item-button").parent)
    }

    return {
        setUpMainList,
        populateLists,
        populateItems,
        formSubmitList,
        formSubmitItem
    }
})();

(() => {
    console.log("start here")
    
    console.log(objController.getLists())
    domController.setUpMainList()
    domController.populateLists();
})();

document.getElementById("list-form").addEventListener("submit", domController.formSubmitList, false);
document.getElementById("item-form").addEventListener("submit", domController.formSubmitItem, false);