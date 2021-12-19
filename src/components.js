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
    function listComponent(list, itemNum) {
        console.log(list)
        const divListComp = document.createElement("div");
        const h2List = document.createElement("h2");
        const pDescriptionList = document.createElement("p");
        const pNumItemList = document.createElement("p")

        divListComp.classList.add("list-container")
        h2List.innerText = list.getName();
        pDescriptionList.innerText = list.getDescription();
        pNumItemList.innerText = `Items in List: ${itemNum}`;

        divListComp.appendChild(h2List);
        divListComp.appendChild(pDescriptionList);
        divListComp.appendChild(pNumItemList)
        return divListComp;
    }

    function allListsComponent() {
        const divAllListComp = document.createElement("div")
        const h1AllListComp = document.createElement("h1")
        const buttAdd = document.createElement("button")

        h1AllListComp.innerText = "To Do List"
        buttAdd.innerText = "Create New List";
        divAllListComp.appendChild(h1AllListComp)
        divAllListComp.appendChild(buttAdd)
        return divAllListComp;
    }


    /****************
     * modal component 
     * ---------------
     * edits 
     * (and maybe are your sure message)
     *****************/
    return {
        allListsComponent,
        listComponent
    }
})();
export default componentCreater;
export const createAllListsComponent = componentCreater.allListsComponent();
export function createListComponent(list, num) {
    return componentCreater.listComponent(list, num)
}