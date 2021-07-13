const timerContaniner = document.querySelector(".js-timer"),
    timerclock = timerContaniner.querySelector("h1"),
    timerBtn = timerContaniner.querySelector("button");

const CLICKEDTIMER = "clickedTimer";
const INITTIME = timerclock.innerText;

function timerstart(){
    const nowtime = timerclock.innerText;
    if(timerBtn.classList.contains(CLICKEDTIMER)){
        timerBtn.innerText = "reset"
        if (nowtime === "00:00") return
        const arr = nowtime.split(":")
        let timerminutes = arr[0]
        let timerseconds = arr[1]
        if(timerseconds == "00"){
            timerseconds = 59;
            timerminutes = +timerminutes - 1;
            timerclock.innerText = `${timerminutes <10 ? `0${timerminutes}` : timerminutes}:${timerseconds}`
        } else{
            timerseconds = +timerseconds -1;
            timerclock.innerText = `${timerminutes}:${timerseconds <10 ? `0${timerseconds}` : timerseconds}`
        }
    }else{
        timerclock.innerText = INITTIME
        timerBtn.innerText = "timer"
    }
}
function handleTimer(){
    timerBtn.classList.toggle(CLICKEDTIMER)
}
function timer(){
    timerBtn.addEventListener("click",handleTimer);
    setInterval(timerstart,1000);
}

function init(){
    timer();
}

init()