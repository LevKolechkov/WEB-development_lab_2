import createTaskElement from "./createTaskElement.mjs";
import saveTasks from "./saveTasks.mjs";

export default function addTask(taskList) {
  const titleInput = document.getElementById("titleInput");
  const aboutInput = document.getElementById("aboutInput");

  const task = {
    title: titleInput.value.trim(),
    about: aboutInput.value.trim(),
  };

  if (task.title !== "" && task.about !== "") {
    createTaskElement(task, taskList);

    titleInput.value = "";
    aboutInput.value = "";

    saveTasks(taskList);
  } else {
    alert("Все поля должны быть заполнены!");
  }
}
