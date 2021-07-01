// ref : https://developer.mozilla.org/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

console.log("TEST-prototype chain");

let A = [4,2]

let obj = {
    a  : 1,
    value(){
        console.log("HAHA")
        console.log(this)
        return 1
    }
}

console.log(obj)
console.log("V",obj.value)
console.log("F",obj.value())
console.log("HAS",obj.hasOwnProperty('value'))

console.log("//////////////////////////")
let T =[]
for(let i =0 ; i<2;i++){
    T.push({})
    T[i].__proto__ = obj
}

console.log("T:",T)
console.log(T[0])
console.log(T[0].value)
console.log(T[1].value)
console.log(T[0].value())
console.log(T[1].value())
console.log(!T[0].hasOwnProperty('value'))
console.log(!T[1].hasOwnProperty('value'))
