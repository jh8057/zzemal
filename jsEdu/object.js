'use strict'

// Object
// one of the Javascript's data types
// a collection of related data and/or functionality
// Nearly all objects in Javascript are instances of Object
// object = {key,value};


// 1.Literals and properties
const obj1 = {} ; //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax


function printperson(person){
    console.log(person.name);
    console.log(person.age);
}

const zzemal = {
    name : 'zzemal',
    age : 28
};

// dynamic language 라서 나중에 생성하고 지우는게 가능하다.
zzemal.hasJob = false; 
delete zzemal.hasJob;

// 2.computed properties
// key should be always string
console.log(zzemal.name);
console.log(zzemal['name']);

zzemal['hasjob'] = true;
console.log(zzemal.hasjob)

// 이런식으로 나중에 동적으로 값을 받아오고 적용할때 사용된다.
function printValue(obj,key){
    console.log(obj[key]);
}
printValue(zzemal,'name')

// 3.property value shorthand
const person1 = {name : 'bob',age:2};
const person2 = {name : 'foa',age:3};
const person3 = {name : 'dos',age:4};

// 이런식으로 key와 value의 값이 같다면 한번만 써도 된다.
function makePerson(name,age){
    return {
        name,
        age
    }
}

// 4. Constructor function
// 순수하게 object를 생성하는 함수는 대문자로 시작하고, this를 사용해준다.
// 위와 동일한 함수이다.
function Person(name,age){
    // this={}; 가 생략
    this.name = name;
    this.age = age;
    // return this; 가 생략
}

// 5. in operator : property existance check( key in obj)
console.log("has name?" ,"name" in zzemal)

// 6. for .. in vs for .. of
// for (key in obj)
console.clear();
for (let key in zzemal){
    console.log(key)
}
// for (key of obj)
// https://helloworldjavascript.net/pages/260-iteration.html
// iterable(반복 가능한 객체)에 한해 사용할 수 있다.
const array = [1,4,5,7,9];
for( let value of array){
    console.log(value)
}

// 7. Fun cloning
// object.assign(dest, [obj1,obj2,obj3...])
const user = {name : 'zzemal',age:'20'};
const user2 = user;
user2.name = 'coder'
console.log(user)

// old way
const user3 = {};
for( let key in user){
    user3[key] = user[key]
}
console.clear()
console.log(user3)

const user4 = {};
Object.assign( user4, user);
console.log(user4)

const user5 = Object.assign({}, user);
console.log(user5)
user5.name = "change"
console.log(user5, user)

// another example
// 뒤에 붙은게 마지막으로 적용된다.
const fruit1 = {color:'red'}
const fruit2 = {color:'blue',size:'big'}
const mixed = Object.assign({},fruit1,fruit2);
console.log(mixed)