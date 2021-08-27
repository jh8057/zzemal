"use strict";

// Make navbar transparnet when it is on the top
const navbar = document.querySelector(".navbar");
const navbarmenu = document.querySelector(".navbar__menu");
const height = navbar.getBoundingClientRect().height;
function handleNavbar() {
  const y = window.scrollY;
  if (y < height) {
    navbar.classList.remove("ActiveFixed");
    navbarmenu.classList.remove("ActiveFixed");
  } else {
    navbar.classList.add("ActiveFixed");
    navbarmenu.classList.add("ActiveFixed");
  }
}

function init() {
  window.addEventListener("scroll", handleNavbar);
}
init();
