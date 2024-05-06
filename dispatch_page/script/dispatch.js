var dispatchForm = document.getElementById("formContainer");

dispatchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var inputs = document
    .getElementById("dispatchForm")
    .getElementsByTagName("input");

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type === "text" && inputs[i].value.trim() === "") {
      alert("Please fill in all fields.");
      return false;
    }
  }

  var confirmDispatch = document.createElement("p");
  confirmDispatch.textContent =
    "Dispatch details saved. Shipment will now be scheduled.";

  dispatchForm.innerHTML = "";
  dispatchForm.appendChild(confirmDispatch);
  dispatchForm.style.fontWeight = "bold";
  dispatchForm.style.fontSize = "1.5rem";
  dispatchForm.style.marginTop = "1.5rem";
  dispatchForm.style.textAlign = "center";
});
