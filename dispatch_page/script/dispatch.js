var dispatchForm = document.getElementById("formContainer");

dispatchForm.addEventListener("submit", function (event) {
  event.preventDefault();

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
