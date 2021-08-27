const navbarbtn = document.querySelector(".navbar__menu");

function handlemenu(e) {
  const navtarget = e.target;
  const navbarbtnselected = document.querySelector(".menu.active");
  if (navtarget === navbarbtnselected) return;
  navtarget.className && navtarget.classList.add("active");
  navtarget.className && navbarbtnselected.classList.remove("active");
  navtarget.className && navbarbtn.classList.remove("toggled");
}

function init() {
  navbarbtn.addEventListener("click", handlemenu);
}

init();
