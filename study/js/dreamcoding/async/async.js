// async & await
// clear style of using promise :)

// 1. async
// async 를 앞에 붙이면 자동적으로 promise로 변환해서 반환한다.
// 아래작성한 것과 동일해진다
async function fetchUser() {
  // do network request in 10 sec ..
  return "ellie";
}

// function fetchUser(){
//     // do network request in 10 sec ..
//     return new Promise((resolve,reject)=>{
//         resolve( 'ellie')
//     });
// }

const user = fetchUser();
console.log(user);

// 2.await

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  //   throw "error";
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

function getBanana2() {
  return delay(3000).then(() => "🍌");
}

function pickFruits2() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}
// pickFruits2().then(console.log);

async function pickFruits() {
  try {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
  } catch {
    return "ERROR";
  }
}

// pickFruits().then(console.log);

// 3.useful promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

// 가장 먼저 도착한 promise를 반환해준다
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
