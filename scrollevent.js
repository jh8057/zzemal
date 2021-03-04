let last_known_scroll_position = 0;
let ticking = false;
let mybodystyle =  document.querySelector('body').style;
let myheadstyle =  document.querySelector('h1');

function flash_ani(){
  myheadstyle.setAttribute('class',"animate__animated animate__flash animate__repeat-1 animate__slow");
}

function doSomething(scroll_pos) {
if((scroll_pos)<600){
  mybodystyle.animation = 'bgwhite 1.5s ease forwards'
  myheadstyle.style.color ="black";
  //console.log(scroll_pos)
  } else if (620<(scroll_pos)<1000){
  mybodystyle.animation = 'bgblack 1.5s ease forwards'
  myheadstyle.style.color ="white";
  flash_ani();
  //console.log(scroll_pos)mybodystyle.animation = 'bgwhite 1.5s ease forwards'
  }
if((scroll_pos)>1010){
  mybodystyle.animation = 'bgwhite 1.5s ease forwards'
  console.log(scroll_pos)
}
if((scroll_pos)<1500){
    document.getElementById("no1").className="NOTSTART";
    document.getElementById("no1").style.opacity = "0";
} else if ((scroll_pos)>1600){
    document.getElementById("no1").className="animate__animated animate__backInLeft";
    document.getElementById("no1").style.opacity = "1";
    }
if ((scroll_pos)<2100){
    document.getElementById("no2").className="NOTSTART";
    document.getElementById("no2").style.opacity = "0";    
} else if((scroll_pos)>2200) {
    document.getElementById("no2").className="animate__animated animate__fadeInUp";
    document.getElementById("no2").style.opacity = "1";
    countdays();
    }
}
function countdays(){
  const date1 = new Date(2020,12,22);
  let date2 = new Date();

  const difftime= date2.getTime()-date1.getTime();
  const diffday = Math.trunc(difftime/1000/60/60/24);

  let countday= document.getElementById("countday");
  countday.innerHTML = diffday;
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});

