const thumT = document.querySelector(".thumbnail__title");
const thumD = document.querySelector(".thumbnail__description");
const thumC = document.querySelector(".thumbnail__contact");
const home = document.querySelector(".thumbnail");
const thumHeight = home.getBoundingClientRect().height;

function transparentHome() {
  const y = window.scrollY;
  if (y > thumHeight / 5) {
    const thumlocation = Math.floor((y * 120) / thumHeight) / 100;
    // console.log(thumlocation);
    thumT.style.opacity = 1 - thumlocation;
    thumD.style.opacity = 1 - thumlocation;
    thumC.style.opacity = 1 - thumlocation;
  } else {
    thumT.style.opacity = 1;
    thumD.style.opacity = 1;
    thumC.style.opacity = 1;
  }
}

function init() {
  window.addEventListener("scroll", transparentHome);
}
init();
