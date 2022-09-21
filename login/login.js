validateLogin();

function showPassword() {
  let x = document.getElementById("floatingPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function login() {
  localStorage.setItem("login", "user");
  location.href = "../index.html";
}

function validateLogin() {
  if (localStorage.getItem("login") == "user") {
    location.href = "../index.html";
  }
}
