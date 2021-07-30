// JSON
// Javascript Object Notation

// 1.Object to Json
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json)

json = JSON.stringify(['apple','banana'])
console.log(json)

const rabbit = {
    name:'tori',
    color:'white',
    size:null,
    birthDate : new Date(),
    // 함수는 json에 포함되지 않는다.
    jump: ()=>{
        console.log(`${this.name} can jump`);
    }
};
json = JSON.stringify(rabbit)
console.log(json)

// 원하는 key 값만 json으로 변환할 수 있다.
json = JSON.stringify(rabbit,["name","color"])
console.log(json)

// 함수를 통해 세밀하게 변경도 가능하다.
json = JSON.stringify(rabbit,(key,value)=>{
    console.log(`key : ${key},value:${value}`);
    return key === 'name' ? 'zzemal' : value;
});
console.log(json)

// 2. Json to Object
// parse(json)
console.clear();
const obj = JSON.parse(json,(key,value)=>{
    console.log(`key : ${key},value:${value}`);
    return value;
})
console.log(obj)

// 단, 한번 json으로 변경된 파일들은 다시 obj로 만들었을때,
// 전부 string으로 되어있으므로 부가적인 효과를 사용할 수없다.
// 거기에 함수는 애초에 포함되지 않으므로 함수도 불러쓸 수 없다.

console.log(rabbit.birthDate.getDate())
// console.log(obj.birthDate.getDate()) => error, string이기때문에
// 함수를 통해 따로 처리해줘야됨(아래처럼).
const obj2 = JSON.parse(json,(key,value)=>{
    console.log(`key : ${key},value:${value}`);
    return key==='birthDate' ? new Date(value) : value;
})
console.log(obj2)
console.log(obj2.birthDate.getDate())

// json beautifier https://codebeautify.org/jsonviewer
// json parser 
// json Validator
// 등 웹사이트가 있다.