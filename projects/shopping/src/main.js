"use strict";

const btn = document.querySelectorAll(".btn");

function printlog(e) {
  console.log(e);
}

function init() {
  btn.forEach((btn) => btn.addEventListener("click", printlog));
}
init();
