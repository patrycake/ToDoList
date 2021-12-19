/*******************
 * todo item object
 *------------------
 * - title
 * - description
 * - dueDate
 * - priority
 * - notes
 * - complete
 * - list I live in???
 *******************/
const item = (inputItemName, inputItemDescription = "") => {
    const itemName = inputItemName;
    const itemDescription = inputItemDescription;

    const getName = () => {
        return itemName
    }
    const getDescription = () => {
        return itemDescription
    }
    const setDescription = (description) => {
        itemDescription = description
    }
    return {
        getName,
        getDescription,
        setDescription
    }
}
/******************
 * list object
 * ---------------
 * - todo items array
 * - add todo
 * - delete todo
 * - name of list
 * - description of list
 ******************/
const list = (inputListName, inputListDescription = "") => {
    let itemsArr = [];
    const listName = inputListName;
    let listDescription = inputListDescription;
    const getName = () => {
        return listName;
    }
    const getDescription = () => {
        return listDescription
    }
    let setDescription = (description) => {
        description = listDescription
    }
    const addItem = (item) => {
        itemsArr.push(item)
    }
    const deleteItem = (item) => {
        let itemIndex = itemsArr.indexOf(item);
        // if(itemIndex != -1){
        itemsArr.splice(itemIndex != 1 ? itemIndex : null, 1)
        // }
    }
    const numItems = () => {
        return itemsArr.length
    }
    return {
        getName,
        getDescription,
        setDescription,
        addItem,
        deleteItem,
        numItems
    };
}

export {
    list,
    item
}