const navUl = document.getElementById("nav");
const menuButton = document.getElementById("hamburger");
const login = document.getElementById("login-container");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("is-active");
  navUl.classList.toggle("nav__list--active");
  login.classList.toggle("nav__login-container--active");
});
