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
    defaultList.addItem(item("defaultItem", "defaultItemDescription"))
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
        if (listArr.includes(inputList) && inputList != defaultList) {
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
    function clickEvents() {
        document.getElementById("items").hidden = true;
        document.getElementById("add-list-but").addEventListener("click", () => {
            document.getElementById("modal-list").classList.add("active")
        })
        document.getElementById("close-form-list").addEventListener("click", function () {
            document.getElementById("modal-list").classList.remove("active")
        })

        document.getElementById("close-form-item").addEventListener("click", function () {
            document.getElementById("modal-item").classList.remove("active")
        })

        document.getElementById("list-form").addEventListener("submit", domController.formSubmitList, false);
        document.getElementById("item-form").addEventListener("submit", domController.formSubmitItem, false);
    }
    const setUpMainItem = (parentList) => {
        // dynamic clean it all before starting headeritem
        document.getElementById("items").hidden = false;
        const divItemComp = document.getElementById("items")
        divItemComp.innerHTML = "";
        const backbutt = document.createElement("button")
        backbutt.innerText = "Back"
        backbutt.id = "back-to-lists"
        backbutt.addEventListener("click", () => {
            document.getElementById("items").hidden = true;
            document.getElementById("lists").hidden = false;
            populateLists();
        })
        divItemComp.appendChild(backbutt)
        divItemComp.appendChild(createItemsHeaderComponent(parentList, parentList.numItems(), "item-header-container"))
        const divAllComp = document.createElement("div")
        divAllComp.id = "items-all-container"
        divItemComp.appendChild(divAllComp)

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
        console.log(divItemsComp)

        parentList.getItems().forEach(item => {
            const itemsComponent = createItemComponent(item)
            divItemsComp.appendChild(itemsComponent)
        })
        document.getElementById("add-item-button").addEventListener("click", () => {
            document.getElementById("modal-item").classList.add("active")
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
        setUpMainItem(document.getElementById("add-item-button").parent)
        populateItems(document.getElementById("add-item-button").parent)
    }

    return {
        // setUpMainList,
        populateLists,
        populateItems,
        formSubmitList,
        formSubmitItem,
        clickEvents
    }
})();

(() => {
    console.log("start here")

    console.log(objController.getLists())
    domController.clickEvents()
    domController.populateLists();
})();