'use strict';
function warnEmpty(){
    alert("뭘 추가해달라는 거죠..?😮")
}

function dateToString(date){
    const datestring = date.toISOString();
    let ko_hour=Number(datestring.substring(11,13))+9;
    if (ko_hour>24){
        ko_hour = ko_hour -24;
    }
    const datestr2 = datestring.substring(0,10) +" "+ ko_hour+datestring.substring(13,19);
    return datestr2;
}

function submitcommit(){
    const newcomment = document.getElementById("new-comment");
    const newcommnetval= newcomment.value;
    const datestr = dateToString(new Date());

    if(newcommnetval){
        const rowEL = document.createElement('div');
        rowEL.classList.add('comment-row');
        rowEL.innerText = datestr +"\n" 
        rowEL.append(newcommnetval);

        document.getElementById('comment').appendChild(rowEL);
        newcomment.value = "";

        const cntEL = document.getElementById("comment-count");
        const cnt = cntEL.innerText;
        cntEL.innerText = parseInt(cnt) +1;

    } else warnEmpty();
}