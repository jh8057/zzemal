const hamberbtn = document.querySelector(".togglebtn");
const menu = document.querySelector(".menu");
const links = document.querySelector(".links");

const CLICKED = "clicked";
function handleBtn(){
    menu.classList.toggle(CLICKED)
    links.classList.toggle(CLICKED)
}

function init(){
    hamberbtn.addEventListener("click",handleBtn);
}

init()