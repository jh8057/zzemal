const imgContainer = document.querySelector(".imgContainer");
const keyContainer = document.querySelector(".keyword");

const IMGNUM = 37;

function genRandom() {
  const number = Math.floor(Math.random() * IMGNUM) + 1;
  return number;
}
function randomImage() {
  const RANDOMNUM = genRandom();
  const img = new Image();
  img.src = `img/${RANDOMNUM}.jpg`;
  img.classList.add("bgImage");
  imgContainer.appendChild(img);
}

function updateImage() {
  const RANDOMNUM = genRandom();
  const img = document.querySelector(".bgImage");
  img.src = `img/${RANDOMNUM}.jpg`;
  imgContainer.classList.toggle("flash");
  setTimeout(() => {
    imgContainer.classList.toggle("flash");
  }, 2000);
}
function genKeyword() {
  const keywords = [
    "사랑하는",
    "찍고싶은",
    "취미삼는",
    "찍히고픈",
    "좋아하는",
    "ㅡ ㅅ ㅡ 하는",
  ];
  const number = Math.floor(Math.random() * 5);
  return keywords[number];
}

function randomKeyword() {
  const keyword = genKeyword();
  keyContainer.innerHTML = `${keyword}`;
  keyContainer.classList.toggle("flash");
  setTimeout(() => {
    keyContainer.classList.toggle("flash");
  }, 2000);
}

function init() {
  randomImage();
  randomKeyword();
  setInterval(updateImage, 10000);
  setInterval(randomKeyword, 10000);
}
init();
