function alert_button(str){
    alert(str)
}

function prompt_button(str){
    prompt(str)
}

function bg_mode(){
    let mybodystyle =  document.querySelector('body').style;
    if (mybodystyle.backgroundColor==='black'){
            mybodystyle.backgroundColor='rgb(255, 248, 228)';
            mybodystyle.color='black';
    } else{
            mybodystyle.backgroundColor='black';
            mybodystyle.color='white';
    }
}

//color
function change_color(color_Value){
    document.querySelector('body').style.color=color_Value;
}

function change_title(){
    let myHeading = document.querySelector('h1');
myHeading.onclick = function(){
    if (myHeading.textContent === 'Auch🔥 Be careful!😒'){
        myHeading.textContent = 'Study about Web';
        } else {
        myHeading.textContent = 'Auch🔥 Be careful!😒';
        }
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