const s1 = document.querySelector(".s1");
const s2 = document.querySelector(".s2");
const s3 = document.querySelector(".s3");
const s4 = document.querySelector(".s4");
const s5 = document.querySelector(".s5");
const s6 = document.querySelector(".s6");
const s7 = document.querySelector(".s7");

function moveshapes(e) {
  let screenY = window.innerHeight;
  let screenX = window.innerWidth;

  let randomY = Math.floor((Math.random() * screenY) / 4) + 1;
  let randomX = Math.floor((Math.random() * screenX) / 7) + 1;
  let randomsign = Math.round(Math.random());
  let sign = randomsign ? "-" : "+";
  const target = document.querySelector(`.${e.target.classList[1]}`);
  target.style.top = sign + randomY + "px";
  target.style.left = sign + randomX + "px";
}

function init() {
  s1.addEventListener("mouseover", moveshapes);
  s2.addEventListener("mouseover", moveshapes);
  s3.addEventListener("mouseover", moveshapes);
  s4.addEventListener("mouseover", moveshapes);
  s5.addEventListener("mouseover", moveshapes);
  s6.addEventListener("mouseover", moveshapes);
  s7.addEventListener("mouseover", moveshapes);
}
init();
