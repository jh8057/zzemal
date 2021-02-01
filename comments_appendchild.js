'use strict';
function warnEmpty(){
    alert("뭘 추가해달라는 거죠..?😮")
}

function dateToString(date){
    const datestring = date.toISOString();
    return datestring;
}

function submitcommit(){
    const newcomment = document.getElementById("new-comment");
    const newcommnetval= newcomment.value;

    if(newcommnetval){
        const dateEL = document.createElement('div');
        dateEL.classList.add("comment-date");
        const datestr = dateToString(new Date());
        dateEL.innerText = datestr;

        const contentEL = document.createElement('div');
        contentEL.classList.add("comment-content");
        contentEL.innerText = newcommnetval;

        const rowEL = document.createElement('div');
        rowEL.classList.add('comment-row');
        rowEL.appendChild(dateEL);
        rowEL.appendChild(contentEL);
        
        document.getElementById('comment').appendChild(rowEL);
        newcomment.value = "";

    } else warnEmpty();
}