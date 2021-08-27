const togglebtn = document.querySelector(".toggle_btn");
const togglenav = document.querySelector(".navbar__menu");

function showmenu() {
  togglenav.classList.toggle("toggled");
}

function init() {
  togglebtn.addEventListener("click", showmenu);
}

init();
