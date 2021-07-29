const form = document.querySelector(".location"),
    dropdown = form.querySelector(".dropdown"),
    dropdowntoggle = dropdown.querySelector(".dropdown-toggle"),
    dropdownmenu = dropdown.querySelector(".dropdown-menu"),
    dropdownopt = dropdown.querySelectorAll(".dropdown-option"),
    nextbtn = form.querySelector(".next-button");

function selected(){
    dropdownmenu.classList.remove("show");
    dropdowntoggle.classList.add("selected");
    nextbtn.removeAttribute("disabled")
}

function changeInnerText(){
    // dropdownmenu.addEventListener("click",selected)
    dropdownopt.forEach((item)=>{
        item.addEventListener("click",(e)=>{
            const value = e.currentTarget.textContent.trim();
            dropdowntoggle.innerText = value;
            selected()
        })
    })
}

function removeShow(){
    dropdownmenu.classList.remove("show")
}

function handleAddSelect(){
    dropdownmenu.classList.toggle("show");
    dropdowntoggle.classList.remove("selected");
    nextbtn.setAttribute("disabled","disable")
    // dropdowntoggle.addEventListener("blur",removeShow)
    changeInnerText();
}

function init(){
    dropdowntoggle.addEventListener("click",handleAddSelect)
    // dropdowntoggle.addEventListener("blur",handleAddSelect)
}

init()