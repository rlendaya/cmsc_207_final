function sendMessage() {
  const replaceContainer = document.getElementById("messageContainer");

  const thankYou = document.createElement("p");
  thankYou.textContent =
    "Thank you for your message! We will get back to you as soon as we can.";

  replaceContainer.innerHTML = "";
  replaceContainer.appendChild(thankYou);
  replaceContainer.style.fontWeight = "bold";
  replaceContainer.style.fontSize = "1.5rem";
  replaceContainer.style.marginTop = "1.5rem";
}
