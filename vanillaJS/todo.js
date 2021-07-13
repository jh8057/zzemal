const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");



const TODOS_LS = 'toDos';

function saveTodos(text){
    localStorage.setItem(TODOS_LS,text)
}
function paintToDo(text){
    const li = document.createElement("ul");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    saveTodos(currentValue);
    toDoInput.value= "";
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){

    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
}
init();