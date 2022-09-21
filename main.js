route();
authGuard();
function route() {
  $("#nav").load("nav.html");
  $("#footer").load("footer.html");
}

function logOut() {
  location.href = "login/login.html";
  localStorage.removeItem("login");
}

function authGuard() {
  if (localStorage.getItem("login") != "user") {
    location.href = "login/login.html";
  }
}
