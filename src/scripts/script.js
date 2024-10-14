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

  const shareButton = document.createElement("button");
  const shareImage = document.createElement("img");
  shareImage.src = "../../assets/menu/share.svg";
  shareImage.alt = "share";
  shareButton.appendChild(shareImage);

  const infoButton = document.createElement("button");
  const infoImage = document.createElement("img");
  infoImage.src = "../../assets/menu/info.svg";
  infoImage.alt = "info";
  infoButton.appendChild(infoImage);

  const editButton = document.createElement("button");
  const editImage = document.createElement("img");
  editImage.src = "../../assets/menu/edit.svg";
  editImage.alt = "edit";
  editButton.appendChild(editImage);

  const menu = document.createElement("div");
  menu.className = "menu";
  menu.appendChild(shareButton);
  menu.appendChild(infoButton);
  menu.appendChild(editButton);

  const listItem = document.createElement("li");

  taskList.appendChild(listItem);

  listItem.appendChild(container);
  listItem.appendChild(menu);

  deleteButton.addEventListener("click", () => {
    event.stopPropagation();
    taskList.removeChild(listItem);
    saveTasks();
  });
  container.addEventListener("click", () => {
    alert("Div был нажат!");
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
