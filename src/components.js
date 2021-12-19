import {
    list,
    item
} from "./todo";

/*
 * show all lists || create new list || create new todo item
 * click on project show all items in list
 *   each item has edit and delete buttons
 *   back to all lists button
 *   add item button
 * 
 */

/*******************
 * show all lists
 * ---------------
 * controller.getalllists
 * for each list create dom list component
 * button add list
 *      call list component
 *******************/

/*****************
 * list component
 * --------------
 * show list info
 * button to edit list 
 * button delete list
 * button show items
 *****************/
const componentCreater = (() => {
    function listComponent(list) {
        console.log(list)
        const divListComp = document.createElement("div");
        const h1List = document.createElement("h1");
        const pList = document.createElement("p");

        h1List.innerText = list.getName();
        pList.innerText = list.getDescription();

        divListComp.appendChild(h1List);
        divListComp.appendChild(pList);
        return divListComp;
    }



    /****************
     * modal component 
     * ---------------
     * edits 
     * (and maybe are your sure message)
     *****************/
    return {
        listComponent
    }
})();
export default componentCreater;
export function createListComponent(x) {return componentCreater.listComponent(x)}