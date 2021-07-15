const body = document.querySelector("body");

const IMG_NUMBER = 10;

function handleImage(){
    console.log("TT")
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `../img/bg${imgNumber+1}.jpg`;
    image.classList.add("bgImage")
    body.appendChild(image);
    // image.addEventListener("loadend",handleImage);//FOR API
}


function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER)
    return number
}
function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();