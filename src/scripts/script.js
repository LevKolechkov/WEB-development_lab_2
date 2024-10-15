const addButton = document.getElementById("addTask");
const titleInput = document.getElementById("titleInput");
const aboutInput = document.getElementById("aboutInput");
const taskList = document.getElementById("taskList");

checkTasks();
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
  containerText.className = "container__text";

  containerText.appendChild(title);
  containerText.appendChild(about);

  const container = document.createElement("div");
  container.className = "container";
  container.appendChild(containerText);
  container.appendChild(deleteButton);

  const listItem = document.createElement("li");
  listItem.className = "task";

  taskList.appendChild(listItem);

  listItem.appendChild(container);
  listItem.appendChild(createMenu(listItem));

  deleteButton.addEventListener("click", (event) => {
    event.stopPropagation();
    deleteMenu(listItem);
  });

  container.addEventListener("click", () => {
    menu = listItem.querySelector(".menu");

    menu.classList.toggle("visible");
  });
}

function saveTasks() {
  let tasks = [];
  taskList.querySelectorAll(".task").forEach((item) => {
    const title = item.querySelector("h1").textContent;
    const about = item.querySelector("h2").textContent;

    tasks.push({ title, about });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
  checkTasks();
}

function checkTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const noTasksItem = taskList.querySelector("li.no-tasks");

  if (tasks.length === 0) {
    const noTasks = document.createElement("li");
    noTasks.className = "no-tasks";

    const noTasksText = document.createElement("h1");
    noTasksText.textContent = "No tasks";

    noTasks.appendChild(noTasksText);

    taskList.appendChild(noTasks);
  } else if (tasks.length > 0 && noTasksItem) {
    noTasksItem.remove();
  }
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(createTaskElement);
}

function createMenu(listItem) {
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

  editButton.addEventListener("click", () => {
    editMenu(listItem);
  });

  shareButton.addEventListener("click", () => {
    shareMenu();
  });

  return menu;
}

function deleteMenu(listItem) {
  const yesButton = document.createElement("button");
  yesButton.textContent = "Yes";

  const noButton = document.createElement("button");
  noButton.textContent = "No";

  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "delete-task__buttons";

  buttonsContainer.appendChild(yesButton);
  buttonsContainer.appendChild(noButton);

  const confirmText = document.createElement("h1");
  confirmText.textContent = "Delete this task?";

  const deleteContainer = document.createElement("div");
  deleteContainer.className = "delete-task";
  deleteContainer.appendChild(confirmText);
  deleteContainer.appendChild(buttonsContainer);

  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.appendChild(deleteContainer);

  document.body.appendChild(overlay);

  yesButton.addEventListener("click", () => {
    taskList.removeChild(listItem);
    saveTasks();
    document.body.removeChild(overlay);
  });

  noButton.addEventListener("click", () => {
    document.body.removeChild(overlay);
  });
}

function editMenu(listItem) {
  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";

  const saveButton = document.createElement("button");
  saveButton.textContent = "Save";

  const editButtons = document.createElement("div");
  editButtons.className = "edit__buttons";
  editButtons.appendChild(cancelButton);
  editButtons.appendChild(saveButton);

  const maxText = document.createElement("textarea");
  maxText.className = "edit__max-input";
  maxText.placeholder = "Max input";
  maxText.value = listItem.querySelector("h2").textContent;

  const miniText = document.createElement("input");
  miniText.type = "text";
  miniText.className = "edit__mini-input";
  miniText.placeholder = "Max input";
  miniText.value = listItem.querySelector("h1").textContent;

  const editContainer = document.createElement("div");
  editContainer.className = "edit";
  editContainer.appendChild(miniText);
  editContainer.appendChild(maxText);
  editContainer.appendChild(editButtons);

  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.appendChild(editContainer);

  document.body.appendChild(overlay);

  cancelButton.addEventListener("click", () => {
    document.body.removeChild(overlay);
  });

  saveButton.addEventListener("click", () => {
    listItem.querySelector("h1").textContent = miniText.value;
    listItem.querySelector("h2").textContent = maxText.value;

    saveTasks();
    document.body.removeChild(overlay);
  });
}

function shareMenu() {
  const copyButton = document.createElement("button");
  const copyImage = document.createElement("img");
  copyImage.src = "../../assets/images/share/copy.svg";
  copyButton.appendChild(copyImage);

  const vkButton = document.createElement("button");
  const vkImage = document.createElement("img");
  vkImage.src = "../../assets/images/share/vk.svg";
  vkButton.appendChild(vkImage);

  const tgButton = document.createElement("button");
  const tgImage = document.createElement("img");
  tgImage.src = "../../assets/images/share/telegram.svg";
  tgButton.appendChild(tgImage);

  const whatsappButton = document.createElement("button");
  const whatsappImage = document.createElement("img");
  whatsappImage.src = "../../assets/images/share/whatsapp.svg";
  whatsappButton.appendChild(whatsappImage);

  const facebookButton = document.createElement("button");
  const facebookImage = document.createElement("img");
  facebookImage.src = "../../assets/images/share/facebook.svg";
  facebookButton.appendChild(facebookImage);

  const shareContainer = document.createElement("div");
  shareContainer.className = "share";
  shareContainer.appendChild(copyButton);
  shareContainer.appendChild(vkButton);
  shareContainer.appendChild(tgButton);
  shareContainer.appendChild(whatsappButton);
  shareContainer.appendChild(facebookButton);
  shareContainer.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.appendChild(shareContainer);

  overlay.addEventListener("click", () => {
    document.body.removeChild(overlay);
  });

  document.body.appendChild(overlay);
}
