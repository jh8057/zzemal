const toggelBtn = document.querySelector(".toggleBtn");
const menu = document.querySelector(".navbar__menu");

function handleBtn() {
  menu.classList.toggle("clickedtoggle");
}

function init() {
  toggelBtn.addEventListener("click", handleBtn);
}

init();
