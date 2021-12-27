export function activateItems(state) {
    document.getElementById("items").hidden = !state;
}

export function getItemDom(){
    return document.getElementById("items")
}

export function clearItemDom(){
    document.getElementById("items").innerHTML = "";
}

export function createHeaderComponent(list) {
    const divComp = document.createElement("div");
    const h2ListName = document.createElement("h1");
    const pListDescription = document.createElement("p");
    const pNumItem = document.createElement("p")
    const butAddItem = document.createElement("button");
    const butEditItem = document.createElement("button");

    divComp.classList.add("item-header-container")
    h2ListName.innerText = list.getName();
    pListDescription.innerText = list.getDescription();
    pNumItem.innerText = `Items in List: ${list.numItems()}`;
    butAddItem.innerHTML = "Add To Do Item"
    butAddItem.id = "add-item-button"
    butAddItem.parent = list
    butEditItem.innerHTML = "Edit"
    butEditItem.id = "edit-item-button"
    butEditItem.parent = list
    butAddItem.addEventListener("click", () => {
        document.getElementById("modal-item").classList.add("active")
    })

    butEditItem.addEventListener("click", () => {
        document.getElementById("modal-list").classList.add("active")
    })

    divComp.appendChild(h2ListName);
    divComp.appendChild(pListDescription);
    divComp.appendChild(pNumItem)
    divComp.appendChild(butAddItem)
    divComp.appendChild(butEditItem)

    return divComp
}

export function createMainItemsContainer(){
    const divAllComp = document.createElement("div")
    divAllComp.id = "items-all-container"
    return divAllComp
}

export function createItemComponent(item) {
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

export const backButton = () => {
    const backbutt = document.createElement("button")
    backbutt.innerText = "Back"
    backbutt.id = "back-to-lists"
    backbutt.addEventListener("click", () => {
        document.getElementById("items").hidden = true;
        document.getElementById("lists").hidden = false;
        populateLists();
    })
    backbutt.classList.add("back-button")
    return backbutt
}

// const populateItems = (parentList) => {
//     const divItemsComp = document.getElementById("items-all-container")
//     console.log(divItemsComp)

//     parentList.getItems().forEach(item => {

//         const itemsComponent = createItemComponent(item)
//         divItemsComp.appendChild(itemsComponent)
//     })
//     document.getElementById("add-item-button").addEventListener("click", () => {
//         document.getElementById("modal-item").classList.add("active")
//     })
// }

export function createClickEventItem(formSubmitItem) {
    document.getElementById("close-form-item").addEventListener("click", function () {
        document.getElementById("modal-item").classList.remove("active")
    })
    document.getElementById("item-form").addEventListener("submit", formSubmitItem, false);

}