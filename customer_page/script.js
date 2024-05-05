const replaceContainer = document.getElementById("messageContainer");

// event listener for form submission
replaceContainer.addEventListener("submit", function (event) {
  //  prevent default form submission
  event.preventDefault();

  // Get the value of the email variables
  var emailInput = document.getElementById("email").value;
  var messageInput = document.getElementById("message").value;
  var nameInput = document.getElementById("name").value;

  // Condition to check if email and message is not blank
  if (emailInput === "" || nameInput === "" || messageInput === "") {
    alert("Please fill in all fields!");
    return;
  }

  const thankYou = document.createElement("p");
  thankYou.textContent =
    "Thank you for your message! We will get back to you as soon as we can.";

  replaceContainer.innerHTML = "";
  replaceContainer.appendChild(thankYou);
  replaceContainer.style.fontWeight = "bold";
  replaceContainer.style.fontSize = "1.5rem";
  replaceContainer.style.marginTop = "1.5rem";
});
