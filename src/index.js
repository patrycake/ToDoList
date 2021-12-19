import componentCreater, {createListComponent} from "./components";
import {
    list,
    item
} from "./todo";
/******************
 * controller module object objects
 * ------------------------
 * - create default list
 * - add list
 * - array of lists
 * - get all lists
 * - creates todo item
 * - adds item to default and then to specific list
 */
const objController = (() => {
    let listArr = [];
    const addList = (newList) => {
        newList != "-1" ? listArr.push(newList) : "";
        console.log(newList.getName())
    }
    const getLists = () => {
        return listArr;
    }
    // const createItem = (inputList = "-1") => {
    //     newItem = item();
    //     defaultList.addItem(newItem);
    //     if (listArr.includes(inputList)) {
    //         listArr[listArr.indexOf(inputList)].addItem(newItem)
    //     }
    // }
    return {
        addList,
        getLists,
        // createItem
    }
})();

// /*******************
//  * controller module object dom
//  * -----------------------------
//  * - controls the dom?
//  *      - show all lists
//  */
const domController = (() => {
    const populateLists = () => {
        console.log("poplist")
        console.table(objController.getLists())
        const divListsComp = document.getElementById("lists")
        objController.getLists().forEach(onelist => {
            console.log(onelist)
            divListsComp.appendChild(createListComponent(onelist))
        })
    }
    return {
        populateLists
    }
})();

(() => {
    console.log("start here")
    const defaultList = list("default", "Where all items are saved");
    objController.addList(defaultList)
    console.log(objController.getLists())
    domController.populateLists();
    // componentCreater.default.createListComponent()
})();