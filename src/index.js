import showLists from "./components"
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


/*******************
 * controller module object dom
 * -----------------------------
 * - controls the dom?
 *      - show all lists
 */
const domController = (() => {
    showLists(objController.getLists());
})();

