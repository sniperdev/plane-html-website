const navUl = document.getElementById("nav");
const menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", () => {
  navUl.classList.toggle("active");
});
