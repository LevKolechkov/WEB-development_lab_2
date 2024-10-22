import deleteMenu from "./deleteMenu.mjs";
import createMenu from "./createMenu.mjs";

export default function createTaskElement(task, taskList) {
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
    const menu = listItem.querySelector(".menu");

    menu.classList.toggle("visible");
  });
}
