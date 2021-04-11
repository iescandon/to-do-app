// Get todo-text, todo-form, todo-list, todo-count from the document and store them into variables
// var todoInput = document.getElementById("todo-text");
var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");
var removeBtn = document.querySelector(".removeBtn");
// Array of To-dos
var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function init(){
var storedTodos = JSON.parse(localStorage.getItem("todos"));

if (storedTodos !== null) {
  todos = storedTodos;
}
  renderTodos();
}

function storeTodos(){
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  todoList.textContent = "";
  todoCountSpan.textContent = todos.length;

  for (var i = 0; i < todos.length; i++) {
    var li = document.createElement("li");
    li.textContent = todos[i];

    var btn = document.createElement("button")
    btn.textContent = "Complete";
    btn.setAttribute("data-index", i);
    btn.addEventListener("click", removeTodos)

    li.appendChild(btn)
    todoList.appendChild(li)
  }
}

function removeTodos() {
  var item = this;
  var index = item.getAttribute("data-index");
  todos.splice(index, 1);
  storeTodos();
  renderTodos();
}

todoForm.addEventListener("submit", function(event){
  event.preventDefault();
  var newTodo = todoInput.value.trim();
  if (newTodo === "") {
    alert("Please type in your todo");
    return;
  }
  todos.push(newTodo)
  todoInput.value = "";
  storeTodos();
  renderTodos();
});

init();
