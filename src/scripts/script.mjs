import addTask from "./addTask.mjs";
import checkTasks from "./checkTasks.mjs";
import loadTasks from "./loadTasks.mjs";

const taskList = document.getElementById("taskList");

checkTasks(taskList);
loadTasks(taskList);

const addButton = document.getElementById("addTask");

addButton.addEventListener("click", function () {
  addTask(taskList);
});
