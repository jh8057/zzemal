const dropdown = document.querySelector(".dropdown"),
    toggle = document.querySelector(".dropdown-toggle"),
    menu = document.querySelector(".dropdown-menu"),
    option = document.querySelectorAll(".dropdown-option"),
    nextbtn = document.querySelector(".next-button");

function selectOption(e) {
    const value = e.relatedTarget;
    if(value !== null){
        if(value.classList.contains("dropdown-option")){
            toggle.innerText = value.innerText;
        }
        toggle.classList.add('selected')
        nextbtn.removeAttribute('disabled')
    } else{
        toggle.innerText = "지점을 선택해주세요"
    }
}

function removeShow(e){
    menu.classList.remove("show")
    selectOption(e)
}

function clickedtoggle(){
    menu.classList.toggle("show");
    toggle.classList.remove("selected");
    nextbtn.setAttribute("disabled","disable")
    toggle.innerText = "지점을 선택해주세요"
}

function init(){
    toggle.addEventListener("click",clickedtoggle)
    toggle.addEventListener("blur",removeShow)
}

init();
