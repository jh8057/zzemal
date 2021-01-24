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
    if (myHeading.textContent === 'Study about Web'){
        myHeading.textContent = 'Auch🔥 Be careful!😒';
        } else {
        myHeading.textContent = 'Study about Web';
        }
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