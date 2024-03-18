let tasks = [];

const button = document.getElementById("button");
button.addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskName = taskInput.value.trim();
  if (taskName === "") {
    alert("Enter a task.");
    return;
  }

  tasks.push({ name: taskName, completed: false });
  renderTasks();
  taskInput.value = "";
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.name;
    if (task.completed) {
      li.classList.add("completed");
    }
    li.addEventListener("click", () => toggleTask(index));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      deleteTask(index);
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}
