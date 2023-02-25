const todoInputEl = document.querySelector(".todo__input");
const todoListItemEl = document.querySelector(".todo__list");
const todoItem = document.querySelectorAll(".todo__item");
function addTodoListItem() {
    todoInputEl.addEventListener("keypress", function (event) {
        if (event.keyCode === 13) {
            let newListItem = creatListItem(todoInputEl.value);
            //todoListItemEl.appendChild(newListItem); these one append at the end
            todoListItemEl.insertBefore(
                newListItem,
                todoListItemEl.childNodes[0]
            );

            todoInputEl.value = "";
        }
    });
}
addTodoListItem();

function creatListItem(text) {
    const newListElem = document.createElement("li");
    newListElem.textContent = text;
    newListElem.setAttribute("class", "todo__item");
    //newListElem.classList.add("todo__item"); u can use these  as well
    return newListElem;
}
console.log(creatListItem("Hello"));

// function getDone() {
//     for (let elm of todoItem) {
//         elm.addEventListener("click", function () {
//             elm.classList.add("done");
//         });
//     }
// }
// getDone();
function togleDone() {
    todoListItemEl.addEventListener("click", function (event) {
        if (event.target.classList.contains("todo__item")) {
            event.target.classList.toggle("done");
        }
    });
}
togleDone();
