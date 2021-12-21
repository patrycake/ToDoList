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
    function listComponent(list, itemNum, style) {
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

    function listsHeaderComponent() {
        const divListHeaderComp = document.createElement("div")
        const h1ListHeaderComp = document.createElement("h1")
        const buttAdd = document.createElement("button")

        divListHeaderComp.id = "list-header"
        divListHeaderComp.classList.add("active")
        h1ListHeaderComp.innerText = "To Do List"
        buttAdd.innerText = "Create New List";
        divListHeaderComp.appendChild(h1ListHeaderComp)
        divListHeaderComp.appendChild(buttAdd)

        const allListAndButt = {
            "listHeaderComp": divListHeaderComp,
            "listAddButt": buttAdd,
        }
        return allListAndButt;
    }

    function itemComponent(item){
        const divItemComp = document.createElement("div");
        const h2Item = document.createElement("h2");
        const pDescriptionItem = document.createElement("p");

        divItemComp.classList.add("item-container")
        h2Item.innerText = item.getName();
        pDescriptionItem.innerText = item.getDescription();

        divItemComp.appendChild(h2Item);
        divItemComp.appendChild(pDescriptionItem);

        return divItemComp;
    }

    return {
        listsHeaderComponent,
        listComponent,
        itemComponent
    }
})();
export default componentCreater;
export const createListsHeaderComponent = componentCreater.listsHeaderComponent();
export function createListComponent(list, num, style) {
    return componentCreater.listComponent(list, num, style)
}
export function createItemsHeaderComponent(list, num, style) {
    return componentCreater.listComponent(list, num, style)
}
export function createItemComponent(item) {
    return componentCreater.itemComponent(item)
}