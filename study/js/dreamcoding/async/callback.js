'use strict'

// Javascript is synchronous (동기적)
// Execute the code block by order after hoisting
// hoisting var, function declaration/ 함수나 변수를 제일 위로 올려 선언하는 것

console.log('1');
console.log('2');
setTimeout(()=>console.log('3'),1000);
console.log('4');
console.log('5');


// synchronous callback
function printImmediately(print){
    print();
}
printImmediately(()=>console.log('hello'));

// Asynchronous callback
function printWithDelay(print,timeout){
    setTimeout(print,timeout);
}
printWithDelay(()=>console.log('Async callback'),2000);


// callback Hell example
class UserStorage{
    loginUser(id,password,onSuccess,onError){
        setTimeout(()=>{
            if(
                (id === 'ellie' && password === 'dream')||
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'))
            }
        },2000);

    }
    getRoles(user, onSuccess,onError){
        setTimeout(()=>{
            if(user === 'ellie'){
                onSuccess({name:'ellie',role:'admin'});
            }else{
                onError(new Error('no access'))
            }
        })
    }
}

const loginContain = document.querySelector(".login");
const idContain = loginContain.querySelector(".id");
const pwContain = loginContain.querySelector(".pw");
const loginbtn = loginContain.querySelector("button");

const userstorage = new UserStorage();


function handlelogin(event){
    event.preventDefault();
    const id = idContain.value;
    const password = pwContain.value;
    userstorage.loginUser(
        id,
        password,
        user=>{
            userstorage.getRoles(
                user,
                userWithRole=>{
                    alert(`Hello ${userWithRole.name}, you hava a ${userWithRole.role} role`)
                },
                error =>{
                    console.log(error);
                }
            );
        },
        error =>{
            console.log(error);
        }
    )
    idContain.value= "";
    pwContain.value= "";
}

function init(){
    loginbtn.addEventListener("click",handlelogin)
}

init();

