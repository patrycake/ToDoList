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

/******************
 * list object
 * ---------------
 * - todo items array
 * - add todo
 * - delete todo
 * - name of list
 * - description of list
 ******************/
const list = (inputListName, inputDescription = "") => {
    let itemsArr = [];
    const listName = inputListName;
    let listDescription = inputDescription;
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
    return {
        getName,
        getDescription,
        setDescription,
        addItem,
        deleteItem
    };
}

export {list}