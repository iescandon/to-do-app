// Get todo-text, todo-form, todo-list, todo-count from the HTML document and store them into variables
var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");
var removeBtn = document.querySelector(".removeBtn");

// Array of todos, can be set to an empty array as well
var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];


function init(){
// Get stored todos from localStorage
// Parsing the JSON string to an object
var storedTodos = JSON.parse(localStorage.getItem("todos"));

// If storedTodos are not empty, update the todos array to it
if (storedTodos !== null) {
  todos = storedTodos;
}

// Render todos to the DOM
renderTodos();
}

function storeTodos(){
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.textContent = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li and button for each todo and append it to the todolist
  for (var i = 0; i < todos.length; i++) {
    // Create li element and make the todo text the text content
    var li = document.createElement("li");
    li.textContent = todos[i];

    // Create a button element and give it the text content "Complete"
    // Set a data-index to the todo's index so later we can locate and remove from the todos array
    // Add an event listener to the button
    var btn = document.createElement("button")
    btn.textContent = "Complete";
    btn.setAttribute("data-index", i);
    btn.addEventListener("click", removeTodos)

    //Append the button the li before you append the li to the todoList
    li.appendChild(btn)
    todoList.appendChild(li)
  }
}

function removeTodos() {
  // "This" is the button element the user selected
  var item = this;

  // Get its data-index value and remove the todo element from the list
  var index = item.getAttribute("data-index");
  todos.splice(index, 1);

  // Store updated todos in localStorage, re-render the list
  storeTodos();
  renderTodos();
}

function addTodos(event) {
  // Prevents the page from refreshing
  event.preventDefault();

  // Get value from todoInput
  var newTodo = todoInput.value.trim();

  // Return from function early if submitted newTodo is blank
  if (newTodo === "") {
    alert("Please type in your todo");
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(newTodo)
  todoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodos();
  renderTodos();
}

todoForm.addEventListener("submit", addTodos);
init();