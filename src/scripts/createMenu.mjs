import editMenu from "./editMenu.mjs";
import shareMenu from "./shareMenu.mjs";

export default function createMenu(listItem) {
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
    shareMenu(listItem);
  });

  return menu;
}
