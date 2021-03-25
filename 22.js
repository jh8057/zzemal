function playmusic(){
    let song = document.getElementById("Theme_song");
    let icon = document.getElementById("playicon");
    if(song.paused){
        song.play();
        icon.src = "./img/pausebutton.png"
    } else{
        song.pause();
        icon.src = "./img/playbutton.png"
    }
}

function showMenu(){
    let navLinks= document.getElementById("navLinks");
    navLinks.style.right="0"
}

function hideMenu(){
    let navLinks= document.getElementById("navLinks");
    navLinks.style.right="-200px"
}