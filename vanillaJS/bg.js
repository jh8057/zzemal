const body = document.querySelector("body");


const IMG_NUMBER = 8;

// function resizeImage(event){
//     const height = event.target.innerHeight;
//     const width = event.target.innerWidth;
//     console.log(height,width)
//     if (width < 430){
//         const bgImg = document.querySelector(".bgImage");
//         bgImg.minWidth = "405px"
//     }

// }

function paintImage(imgNumber){
    const image = new Image();
    image.src = `../img/bg${imgNumber+1}.jpg`;
    image.classList.add("bgImage")
    body.appendChild(image);
    // image.addEventListener("loadend",handleImage);//FOR API
    // window.addEventListener("resize",resizeImage)
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