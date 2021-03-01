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
    if (self.value==='night'){
            mybodystyle.backgroundColor='black';
            mybodystyle.color='white';
            self.value = 'day';
    } else{
            mybodystyle.backgroundColor='rgb(255, 248, 228)';
            mybodystyle.color='black';
            self.value = 'night';
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

