function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Email validation
  var emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(username)) {
    alert("Please enter a valid email address");
    return;
  }

  // Password validation
  var passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]*$/;
  if (!passwordRegex.test(password)) {
    alert(
      "Password must contain an uppercase letter, a number, and only @ as a special character."
    );
    return;
  }

  // Redirect if the password is correct
  if (password === "SmartServTest@123") {
    window.location.href = "dashboard.html";
  } else {
    alert("Incorrect password");
  }
}
