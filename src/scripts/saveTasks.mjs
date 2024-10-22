import checkTasks from "./checkTasks.mjs";

export default function saveTasks(taskList) {
  let tasks = [];
  taskList.querySelectorAll(".task").forEach((item) => {
    const title = item.querySelector("h1").textContent;
    const about = item.querySelector("h2").textContent;

    tasks.push({ title, about });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
  checkTasks(taskList);
}
