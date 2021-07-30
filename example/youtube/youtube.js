"use strict";

const videotitle = document.querySelector(".videotitle");

function handlemoretoggle() {
  videotitle.classList.toggle("more");
}

function init() {
  videotitle.addEventListener("click", handlemoretoggle);
}

init();
