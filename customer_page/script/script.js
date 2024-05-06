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

// Customer order script
const orderForm = document.getElementById("orderContainer");

// event listener for form submission
orderForm.addEventListener("submit", function (event) {
  //  prevent default form submission
  event.preventDefault();
  alert(fdfdf);
  // Get the value of the email variables
  // var sender = document.getElementById("email").value;
  // var messageInput = document.getElementById("message").value;
  // var nameInput = document.getElementById("name").value;

  // // Condition to check if email and message is not blank
  // if (emailInput === "" || nameInput === "" || messageInput === "") {
  //   alert("Please fill in all fields!");
  //   return;
  // }

  const thankYouOrder = document.createElement("p");
  thankYouOrder.textContent =
    "Thank you for your message! We will get back to you as soon as we can.";

  orderForm.innerHTML = "";
  orderForm.appendChild(thankYouOrder);
  orderForm.style.fontWeight = "bold";
  orderForm.style.fontSize = "1.5rem";
  orderForm.style.marginTop = "1.5rem";
});
