'use strict';
function submitbutton(){
    const textarea = document.getElementById("text1");
    const textarea2 = textarea.value;

    let output1 = document.querySelector("#output1");
    output1.innerHTML = output1.innerHTML +"<br>"+ textarea2 ;
}

function removebutton(){
    let output1 = document.querySelector("#output1");
    output1.innerHTML = "";
}

function random_num(){
    let random_number = Math.floor((Math.random() * 10));
    let output1 = document.querySelector("#updown1");
    let output2 = document.querySelector("#updown2");
    if (output1.innerHTML && output2.innerHTML){
        output1.innerHTML = ""; 
        output2.innerHTML = "";
    } else if (!output1.innerHTML){
        output1.innerHTML = random_number;
    } else if (output1.innerHTML && !output2.innerHTML){
        output2.innerHTML = random_number;
    }
}