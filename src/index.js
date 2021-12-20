import componentCreater, {
    createListComponent,
    createAllListsComponent
} from "./components";
import {
    list,
    item
} from "./todo";
import './style.css'

const objController = (() => {
    let listArr = [];
    const addList = (newList) => {
        newList != "-1" ? listArr.push(newList) : "";
        console.log(newList.getName())
    }
    const getLists = () => {
        return listArr;
    }
    const createItem = (inputList = "-1") => {
        newItem = item();
        defaultList.addItem(newItem);
        if (listArr.includes(inputList)) {
            listArr[listArr.indexOf(inputList)].addItem(newItem)
        }
    }
    return {
        addList,
        getLists,
        createItem
    }
})();

const domController = (() => {
    const setUpMainList = () => {
        createAllListsComponent.listAddButt.addEventListener("click", () => {
            document.getElementById("modal-list").classList.add("active")
        })
    }
    const populateLists = () => {
        const divListsComp = document.getElementById("lists")
        divListsComp.innerHTML = "";
        divListsComp.appendChild(createAllListsComponent.allListComp)
        objController.getLists().forEach(onelist => {
            const listContainer = createListComponent(onelist, onelist.numItems())
            listContainer.addEventListener("click", function(){
                divListsComp.innerHTML = "";
                populateItems(onelist)
            })
            divListsComp.appendChild(listContainer)
        })
    }
    const populateItems = (parentList) => {}

    function formSubmitList(event) {
        event.preventDefault();
        document.getElementById("modal-list").classList.remove("active")
        const listForm = document.getElementById("list-form")
        objController.addList(list(listForm.elements['list-name'].value, listForm.elements['list-description'].value))
        populateLists()
    }

    const formSubmitItem = (event) => {
        event.preventDefault();
        document.getElementById("modal-item").classList.remove("active")
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
    const defaultList = list("default", "Where all items are saved");
    objController.addList(defaultList)
    console.log(objController.getLists())
    domController.setUpMainList()
    domController.populateLists();
})();

document.getElementById("list-form").addEventListener("submit", domController.formSubmitList, false);