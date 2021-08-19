const toggleBtn = document.querySelector(".toggleBtn");
const menu = document.querySelector(".mobile__navbar--menu");

function toggleClass() {
  menu.classList.toggle("toggled");
}

function init() {
  toggleBtn.addEventListener("click", toggleClass);
}
init();
