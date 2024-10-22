import saveTasks from "./saveTasks.mjs";

export default function deleteMenu(listItem) {
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
    saveTasks(taskList);
    document.body.removeChild(overlay);
  });

  noButton.addEventListener("click", () => {
    document.body.removeChild(overlay);
  });
}
