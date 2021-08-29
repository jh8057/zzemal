const body = document.querySelector("body");
const arrowBtn = document.querySelector(".arrow_btn");
const Anavbar = document.querySelector(".navbar");
const Aheight = navbar.getBoundingClientRect().height;
function createArrow() {
  const y = window.scrollY;

  if (y > Aheight) {
    arrowBtn.classList.add("ActiveOpacity");
  } else {
    arrowBtn.classList.remove("ActiveOpacity");
  }
}

function init() {
  window.addEventListener("scroll", createArrow);
}
init();
