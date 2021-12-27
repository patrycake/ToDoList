export function activateLists(state) {
    document.getElementById("lists").hidden = !state;
}
export function getListDom() {
    return document.getElementById("lists-all-container")
}
export function clearListDom(){
    document.getElementById("lists-all-container").innerHTML = "";
}
export function createListComponent(list) {
    const divListComp = document.createElement("div");
    const h2List = document.createElement("h2");
    const pDescriptionList = document.createElement("p");
    const pNumItemList = document.createElement("p")

    divListComp.classList.add("list-container")
    h2List.innerText = list.getName();
    pDescriptionList.innerText = list.getDescription();
    pNumItemList.innerText = `Items in List: ${list.numItems()}`;

    divListComp.appendChild(h2List);
    divListComp.appendChild(pDescriptionList);
    divListComp.appendChild(pNumItemList)

    return divListComp;
}

export function createClickEventsList(formSubmitList) {

    document.getElementById("add-list-but").addEventListener("click", () => {
        document.getElementById("modal-list").classList.add("active")
    })
    document.getElementById("close-form-list").addEventListener("click", function () {
        document.getElementById("modal-list").classList.remove("active")
    })
    document.getElementById("list-form").addEventListener("submit", formSubmitList, false);
   
}

