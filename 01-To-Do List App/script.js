const buttonEl = document.querySelector('#button');
const todoList = document.querySelector('#todo_list');

function addTodo() {
    const li = document.createElement("li");
    let inputValue = document.querySelector(".input").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === "") {
        alert("You must write something bro!");
    } else {
        todoList.appendChild(li);
    }

    document.querySelector("input").value = "";
}

buttonEl.addEventListener('click', addTodo);