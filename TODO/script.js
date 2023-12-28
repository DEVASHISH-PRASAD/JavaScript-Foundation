function TODO() {
  const todoInput = document.getElementById("inputTodo");
  const todoList = document.getElementById("unorderlist");

  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    const newTodo = document.createElement("li");
    newTodo.textContent = todoText;
    newTodo.onclick = function () {
      todoList.removeChild(newTodo);
    };
    todoList.appendChild(newTodo);
    todoInput.value = "";
  }
}
