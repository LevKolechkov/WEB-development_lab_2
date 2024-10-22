import createTaskElement from "./createTaskElement.mjs";

export default function loadTasks(taskList) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => createTaskElement(task, taskList));
}
