const s1 = document.querySelector(".s1");
const s2 = document.querySelector(".s2");
const s3 = document.querySelector(".s3");
const s4 = document.querySelector(".s4");
const s5 = document.querySelector(".s5");
const s6 = document.querySelector(".s6");
const s7 = document.querySelector(".s7");

function moveshapes() {
  let value = window.scrollY;
  s1.style.top = value * 0.5 + "px";
  s2.style.top = value * 1.5 + "px";
  s3.style.top = value * 4 + "px";
  s4.style.top = value * 1.05 + "px";
  s5.style.top = value * 2.5 + "px";
  s6.style.top = value * 0.05 + "px";
  s7.style.top = value * 0.3 + "px";
}

function init() {
  window.addEventListener("scroll", moveshapes);
}
init();
