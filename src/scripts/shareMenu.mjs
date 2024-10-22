export default function shareMenu(listItem) {
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
