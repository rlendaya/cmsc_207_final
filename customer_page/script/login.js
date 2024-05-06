function validateLogin() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email === "email@test.com" && password === "123") {
    window.location.href = "./customer_order_page.html";

    // return true;
  } else {
    alert("Invalid Credentials");
    return false;
  }
}
