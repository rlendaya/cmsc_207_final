// Customer order script
const orderForm = document.getElementById("orderContainer");

// event listener for form submission
orderForm.addEventListener("submit", function (event) {
  //  prevent default form submission
  event.preventDefault();
  // Get the value of the email variables

  var senderName = document.getElementById("companyName").value;
  var senderContactPerson = document.getElementById(
    "senderContactPerson"
  ).value;
  var senderEmail = document.getElementById("senderEmail").value;
  var senderAddress = document.getElementById("pickUpAddress").value;
  var pickUpDate = document.getElementById("pickUpDate").value;
  var receiverName = document.getElementById("receiverName").value;
  var deliveryAddress = document.getElementById("deliveryAddress").value;
  var deliveryDate = document.getElementById("deliveryDate").value;

  // Condition to check if email and message is not blank
  if (
    senderEmail === "" ||
    senderAddress === "" ||
    pickUpDate === "" ||
    receiverName === "" ||
    deliveryAddress === "" ||
    deliveryDate === ""
  ) {
    alert("Please fill in all fields!");
    return;
  }

  const thankYouOrder = document.createElement("p");
  thankYouOrder.textContent =
    "Thank you for your order! We will call you for more details.";

  orderForm.innerHTML = "";
  orderForm.appendChild(thankYouOrder);
  orderForm.style.fontWeight = "bold";
  orderForm.style.fontSize = "1.5rem";
  orderForm.style.marginTop = "1.5rem";
});
