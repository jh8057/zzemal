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

function bg_mode(){
    let mybutton = document.querySelector('#B1');
    let mybodystyle =  document.querySelector('body').style;
    if (mybutton.value==='night'){
            mybodystyle.backgroundColor='black';
            mybodystyle.color='white';
            mybutton.value = 'day';
    } else{
            mybodystyle.backgroundColor='rgb(255, 248, 228)';
            mybodystyle.color='black';
            mybutton.value = 'night';
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

function change_img(){
    let myImage = document.querySelector('#P1');
    let mySrc = myImage.getAttribute('src');
    if(mySrc === './img/domain_img.jpg') {
      myImage.setAttribute('src','./img/art1.jpg');
    } else {
      myImage.setAttribute('src','./img/domain_img.jpg');
    }
}