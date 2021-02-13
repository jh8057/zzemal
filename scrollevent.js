let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
if((scroll_pos)<180){
    document.getElementById("no1").className="NOTSTART";
    document.getElementById("no1").style.opacity = "0";
} else if ((scroll_pos)>210){
    //console.log(scroll_pos)
    document.getElementById("no1").className="animate__animated animate__backInLeft";
    document.getElementById("no1").style.opacity = "1";
    }
if ((scroll_pos)<700){
    document.getElementById("no2").className="NOTSTART";
    document.getElementById("no2").style.opacity = "0";    
} else if((scroll_pos)>740) {
    document.getElementById("no2").className="animate__animated animate__fadeInUp";
    document.getElementById("no2").style.opacity = "1";
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