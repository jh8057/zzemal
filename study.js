function flash_ani(){
    let myheadstyle =  document.querySelector('h1');
    myheadstyle.setAttribute('class',"animate__animated animate__flash animate__repeat-1 animate__slow");
  }
  
flash_ani();

function countdays(){
    const date1 = new Date(2020,12,22);
    let date2 = new Date();
  
    const difftime= date2.getTime()-date1.getTime();
    const diffday = Math.trunc(difftime/1000/60/60/24);
  
    let countday= document.getElementById("countday");
    countday.innerHTML = diffday;
  }

countdays();