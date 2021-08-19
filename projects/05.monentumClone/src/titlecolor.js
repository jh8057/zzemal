const title = document.querySelector("#title");

document.title = "It's title";

const BASE_COLOR = "yellow"
const OTHER_COLOR = "black"

function handleClick(event){
    const currentColor = title.style.color;
    if( currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else{
        title.style.color = BASE_COLOR;
    }
}
function handleOffline(){
    title.innerHTML = "OFFLINE!! Check the wifi!"
}

function handleonline(){
    title.innerHTML = "RE CONNECTTED! I'M JS"
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick)
    window.addEventListener("offline",handleOffline)
    window.addEventListener("online",handleonline)
}

init();
