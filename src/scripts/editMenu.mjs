import saveTasks from "./saveTasks.mjs";

export default function editMenu(listItem) {
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

    saveTasks(listItem);
    document.body.removeChild(overlay);
  });
}
