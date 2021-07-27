'use strict'

// Promise is a Javascript object for asynchronous operation.
// State : pending -> fulfilled or rejected
// Producer vs Consumer

// 1.Producer
// when new Promise is created, the executor runs automatically
const promise = new Promise((resolve,reject)=>{
    // doing some heavy work(network, read files)
    console.log('doing something...');
    setTimeout(()=>{
        resolve('ellie');
        // reject(new Error('no network'));
    },2000);
});

// 2.Consumer : then, catch, finally
promise
  .then(value=>{ //promise가 수행 된 후 
      console.log(value);
  })
  .catch(error => { //실패하면 error를 잡는다
    console.log(error);
  })
  .finally(()=>{ //성공과 상관없이 수행
      console.log("finally")
  })

// 3.Promise Chaining
const fetchNumber = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(1),1000);
})

fetchNumber
.then(num=>num*2)
.then(num=>num*3)
.then(num=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(num-1),1000);
    });
})
.then(num=>console.log(num));

// 4.Error Handing
const getHen = ()=>
    new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("HEN"),1000);
    });
const getEgg = hen=>
    new Promise((resolve,reject)=>{
        setTimeout(()=>reject( new Error(`error! ${hen} => EGG`)),1000);
    });
const cook = egg=>
    new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(`${egg} => FRY`),1000);
    });

getHen()
    .then(getEgg) // .then(hen=>getEgg(hen))이랑 동일하다
    .catch(error=>{
        return "BREAD"
    }) // 이런식으로 중간에 catch를 써줘서 딱, 이 지점에서 에러가 날 경우를 대비해서
       // 큰 흐름에 영향이 없도록 예외처리가 가능하다
    .then(cook) // 위 처럼 같은 promise를 전달할 경우 생략 가능하다
    .then(console.log)
    .catch(console.log); // 마지막에 catch를 써서 한번에 에러 처리도 가능하다