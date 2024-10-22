export default function checkTasks(taskList) {
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
