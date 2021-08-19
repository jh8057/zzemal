const darkBtn = document.querySelector(".darkMode");
const darkCircle = document.querySelector(".darkMode__circle");
const body = document.querySelector("body");
const html = document.querySelector("html");
const header = document.querySelector("header");
const home = document.querySelector(".home");
const side = document.querySelector(".sidemenu");

function ChangeMode() {
  darkCircle.classList.toggle("darkMode__circle--active");
  body.classList.toggle("darkMode__active");
  darkBtn.classList.toggle("darkMode__active");
  header.classList.toggle("darkMode__active");
  home.classList.toggle("darkMode__active");
  change_color();
  changeside();
}

function changeside() {
  let screenX = window.innerWidth;
  if (screenX > 768) {
    if (side.classList[1] === "darkMode__active") {
      side.classList.remove("darkMode__active");
    } else {
      side.classList.toggle("darkMode__active--pc");
    }
  } else {
    if (side.classList[1] === "darkMode__active--pc") {
      side.classList.remove("darkMode__active--pc");
    } else {
      side.classList.toggle("darkMode__active");
    }
  }
}

function change_color() {
  const classname = body.className;
  const color = classname === "darkMode__active" ? "#dfe4ea" : "black";
  let link_list = document.querySelectorAll("a");

  for (let i in link_list) {
    if (link_list[i].href) {
      link_list[i].style.color = color;
    }
  }
}

function init() {
  darkBtn.addEventListener("click", ChangeMode);
}
init();
