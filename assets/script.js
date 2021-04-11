// Get todo-text, todo-form, todo-list, todo-count from the document and store them into variables
// var todoInput = document.getElementById("todo-text");
var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

// Array of To-dos
var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function renderTodos() {
  todoList.textContent = "";
  todoCountSpan.textContent = todos.length;

  for (var i = 0; i < todos.length; i++) {
    var li = document.createElement("li");
    li.textContent = todos[i];
    todoList.appendChild(li)
  }
}

renderTodos();