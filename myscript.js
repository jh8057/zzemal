'use strict';
//change title
let myHeading = document.querySelector('h1');
myHeading.onclick = function(){
    if (myHeading.textContent === 'Auch🔥 Be careful!😒'){
        myHeading.textContent = 'Study about Web';
        } else {
        myHeading.textContent = 'Auch🔥 Be careful!😒';
        }
}

function alert_button(str){
    alert(str)
}

function prompt_button(str){
    prompt(str)
}

function bg_mode(self){
    let mybodystyle =  document.querySelector('body').style;
    let link_list = document.querySelectorAll('a')
    if (self.value==='night'){
            mybodystyle.backgroundColor='black';
            mybodystyle.color='white';
            self.value = 'day';
            for( let i in link_list){
                link_list[i].style.color='white';
            }
    } else{
            mybodystyle.backgroundColor='white';
            mybodystyle.color='black';
            self.value = 'night';
            for( let i in link_list){
                link_list[i].style.color='black';
            }
    }
}

function change_color(color_Value){
    document.querySelector('body').style.color=color_Value;
    let link_list = document.querySelectorAll('a')
    for( let i in link_list){
        link_list[i].style.color=color_Value;
    }
}


function addUserNameonTitle(){
    let myHeading = document.querySelector('h1');
    let myName = prompt('please enter your name🙆‍♂️');
    if(!myName){
        addUserNameonTitle();
    } else{
        localStorage.setItem('name',myName);
        myHeading.textContent = `Welcome ${myName.toUpperCase()}!`;
    }
}

function change_img(self){
    let mySrc = self.getAttribute('src');
    if(mySrc === './img/domain_img.jpg') {
      self.setAttribute('src','./img/art1.jpg');
    } else {
      self.setAttribute('src','./img/domain_img.jpg');
    }
}

function scroll_button(){
    let last_known_scroll_position = 0;
    last_known_scroll_position = window.scrollY;
    window.scrollTo({
        top: scrollY+100,
        behavior: 'smooth'
      });
}

function bounce_ani(self){
    self.setAttribute('class',"animate__animated animate__bounce");
    setTimeout(function(){self.setAttribute('class',"test")},1000);
}

function mouseover_event(){
    let wrapper = document.querySelector(".wrapper");
    let wrapper2 = document.querySelector(".dynamic-txt");
    document.body.style.animation = "bgdark 0.3s ease forwards";
    wrapper.style.opacity = "1";
    setTimeout(function(){
    wrapper2.style.opacity = "1";
    },300);
}

function mouseout_event(){
    let wrapper = document.querySelector(".wrapper");
    let wrapper2 = document.querySelector(".dynamic-txt");
    document.body.style.animation = "bglight 0.3s ease forwards";
    wrapper.style.opacity = "0";
    wrapper2.style.opacity = "0";
}

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