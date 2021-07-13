const stopwatchContaniner = document.querySelector(".js-stopwatch"),
    stopwathcClock = stopwatchContaniner.querySelector("h1"),
    stopwatchBtn = stopwatchContaniner.querySelector("button");

const CLICKED = "clickedBtn"

function stopwatchChange(){
    const stoptime = stopwathcClock.innerText;
    const stoparr = stoptime.split(":");
    let stopminutes = stoparr[0],
    stopseconds = stoparr[1];

    if(stopwatchBtn.classList.contains(CLICKED)){
        stopwatchBtn.innerText = "stop"
        if(stopseconds =="59"){
            stopminutes = +stopminutes +1;
            stopwathcClock.innerText = `${stopminutes <10 ? `0${stopminutes}` : stopminutes}:00`
        } else{
            stopseconds = +stopseconds+1;
            stopwathcClock.innerText = `${stopminutes}:${stopseconds<10 ? `0${stopseconds}` :stopseconds}`
        }
    }else{
        stopwatchBtn.innerText = "start"
    }
}

function handelBtn(){
    stopwatchBtn.classList.toggle(CLICKED)
}
function stopwatch(){
    stopwatchBtn.addEventListener("click",handelBtn);
    setInterval(stopwatchChange,1000)
}

function init(){
    stopwatch();
}
init();