// callback Hell example
class UserStorage{
    loginUser(id,password){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(
                    (id === 'ellie' && password === 'dream')||
                    (id === 'coder' && password === 'academy')
                ){
                    resolve(id);
                }else{
                    reject(new Error('not found'))
                }
            },2000);
        });
    }
    getRoles(user){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(user === 'ellie'){
                    resolve({name:'ellie',role:'admin'});
                }else{
                    reject(new Error('no access'))
                }
            },1000);
        });
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
    userstorage.loginUser(id,password)
        .then(userstorage.getRoles)
        .then(result=>alert(`${result.name} has ${result.role}`))
        .catch(console.log)
    idContain.value= "";
    pwContain.value= "";
}

function init(){
    loginbtn.addEventListener("click",handlelogin)
}

init();
