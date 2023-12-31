document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      alert("Please enter a valid email address.");
      return;
    }

    const password = document.getElementById("password").value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@]).+$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must contain an uppercase letter, a number, and no special characters other than @."
      );
      return;
    }
  });

const passwordField = document.getElementById("password");
passwordField.addEventListener("input", function () {
  this.type = "password"; // Ensure it remains a password field
});
