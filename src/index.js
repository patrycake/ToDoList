import {
    getListDom,
    createListComponent,
    activateLists,
    createClickEventsList,
    clearListDom
} from "./list-components";
import {
    activateItems,
    getItemDom,
    createHeaderComponent,
    createMainItemsContainer,
    backButton,
    clearItemDom,
    createItemComponent,
    createClickEventItem
} from "./item-components"
import {
    list,
    item
} from "./todo";
import './style.css'


const domController = (() => {
    const createListPage = () => {
        activateLists(true);
        clearListDom()
        createClickEventsList(formSubmitList)
        objController.getLists().forEach(list => {
            let listComp = createListComponent(list)
            console.log(listComp)
            listComp.addEventListener("click", function () {
                activateLists(false);
                createItemPage(list)
            })
            getListDom().appendChild(listComp)
        })
    }

    function formSubmitList(event) {
        event.preventDefault();
        document.getElementById("modal-list").classList.remove("active")
        const listForm = document.getElementById("list-form")
        objController.addList(list(listForm.elements['list-name'].value, listForm.elements['list-description'].value))
        createListPage()
    }

    const createItemPage = (list) => {
        activateItems(true)
        createClickEventItem(formSubmitItem)
        clearItemDom()
        getItemDom().appendChild(backButton())
        getItemDom().appendChild(createHeaderComponent(list))
        let mainItemCont = createMainItemsContainer()
        list.getItems().forEach(item => {
            let comp = createItemComponent(item)
            comp.addEventListener("click", function () {
                document.getElementById("modal-item").classList.add("active")
            })
            mainItemCont.appendChild(comp)
        })
        getItemDom().appendChild(mainItemCont)
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
        createListPage,
        formSubmitList
    }
})();

const objController = (() => {
    const defaultList = list("Default List", "Where all items are saved");
    defaultList.addItem(item("Default Item", "default Item Description"))
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



(() => {
    domController.createListPage();
})();