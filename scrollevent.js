let last_known_scroll_position = 0;
let ticking = false;
// let mybodystyle =  document.querySelector('body').style;
// let pink_flag = 0;

function doSomething(scroll_pos) {
// if(pink_flag ===1 && scroll_pos<800){
//   mybodystyle.animation = 'bgwhite 1.5s ease forwards'
//   pink_flag =0;
//   } else if (900<scroll_pos){
//   mybodystyle.animation = 'bgblack 1.5s ease forwards'
//   pink_flag = 1;
//   //console.log(scroll_pos)
//   } else {
//   }
// if((scroll_pos)>2300){
//   mybodystyle.animation = 'bgwhite 1.5s ease forwards'
//   //console.log(scroll_pos)
// }

if((scroll_pos)<1000){
    document.getElementById("no1").className="NOTSTART";
    document.getElementById("no1").style.opacity = "0";
} else if ((scroll_pos)>1010){
    document.getElementById("no1").className="animate__animated animate__backInLeft";
    document.getElementById("no1").style.opacity = "1";
    //console.log(scroll_pos)
    }
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

function countdays(){
  const date1 = new Date(2020,12,22);
  let date2 = new Date();

  const difftime= date2.getTime()-date1.getTime();
  const diffday = Math.trunc(difftime/1000/60/60/24);

  let countday= document.getElementById("countday");
  countday.innerHTML = diffday;
}
countdays();