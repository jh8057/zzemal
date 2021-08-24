"use strict";

// Make navbar transparnet when it is on the top
const navbar = document.querySelector(".navbar");
const height = navbar.getBoundingClientRect().height;
function handleNavbar() {
  const y = window.scrollY;
  if (y < height) {
    navbar.classList.remove("ActiveFixed");
  } else {
    navbar.classList.add("ActiveFixed");
  }
}

function init() {
  window.addEventListener("scroll", handleNavbar);
}
init();
