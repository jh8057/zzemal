const form = document.querySelector(".location"),
    dropdown = form.querySelector(".dropdown"),
    dropdowntoggle = dropdown.querySelector(".dropdown-toggle"),
    dropdownmenu = dropdown.querySelector(".dropdown-menu"),
    dropdownopt = dropdown.querySelector(".dropdown-option"),
    nextbtn = form.querySelector(".next-button");

function handleDeleteSelect(e){
    dropdownmenu.classList.remove("show");
    dropdowntoggle.classList.add("selected");
    dropdowntoggle.innerText = e.target.innerText
}

function handleAfterSelect(){
    dropdownmenu.addEventListener("click",handleDeleteSelect)
}

function handleAddSelect(){
    dropdownmenu.classList.add("show");
    dropdowntoggle.classList.remove("selected");
    handleAfterSelect();
}

function init(){
    dropdowntoggle.addEventListener("click",handleAddSelect)
    nextbtn.classList.add("disable")
}

init()