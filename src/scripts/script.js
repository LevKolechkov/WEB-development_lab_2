const addButton = document.getElementById("addTask");
const titleInput = document.getElementById("titleInput");
const aboutInput = document.getElementById("aboutInput");
const taskList = document.getElementById("taskList");

loadTasks();

function addTask() {
  const task = {
    title: titleInput.value.trim(),
    about: aboutInput.value.trim(),
  };

  if (task.title !== "" && task.about !== "") {
    createTaskElement(task);

    titleInput.value = "";
    aboutInput.value = "";

    saveTasks();
  } else {
    alert("Все поля должны быть заполнены!");
  }
}

addButton.addEventListener("click", addTask);

function createTaskElement(task) {
  const title = document.createElement("h1");
  title.textContent = task.title;

  const about = document.createElement("h2");
  about.textContent = task.about;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "x";

  const containerText = document.createElement("div");
  containerText.className = "container_text";

  containerText.appendChild(title);
  containerText.appendChild(about);

  const container = document.createElement("div");
  container.className = "container";
  container.appendChild(containerText);
  container.appendChild(deleteButton);

  const listItem = document.createElement("li");

  taskList.appendChild(listItem);

  listItem.appendChild(container);

  deleteButton.addEventListener("click", () => {
    taskList.removeChild(listItem);
    saveTasks();
  });
}

function saveTasks() {
  let tasks = [];
  taskList.querySelectorAll("li").forEach((item) => {
    const title = item.querySelector("h1").textContent;
    const about = item.querySelector("h2").textContent;

    tasks.push({ title, about });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(createTaskElement);
}
