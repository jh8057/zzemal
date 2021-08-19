const clockContainer = document.querySelector(".js-clock"),
     clockTitle = clockContainer.querySelector("h1"),
     clockTitle2 = clockContainer.querySelector("h2");


function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    let hours = date.getHours();
    const seconds = date.getSeconds();
    if (hours >11){
        clockTitle2.innerText = "PM";
        hours = hours -12
    } else{
        clockTitle2.innerText = "AM";
    }
    
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes<10 ? `0${minutes}` : minutes }:${
        seconds<10 ? `0${seconds}` : seconds }`;

}
function init(){
    getTime();
    setInterval(getTime,1000);
}

init();