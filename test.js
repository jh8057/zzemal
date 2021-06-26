console.log("TEST");

let A = [4,2]
let obj={
    value(){
        console.log("This = ",this)
        return this
    }
};


console.log(obj)
console.log(obj.value)
console.log(obj.value())
console.log(obj.hasOwnProperty('value'))
let T = []
for( let i = 0 ; i < A.length;i++){
    T.push(obj)
}
// console.log("T:",T)
console.log(T[0])
console.log(T[0].value)
// console.log(T[1].value)
// console.log(T[0].value())
// console.log(T[1].value())
console.log(!T[0].hasOwnProperty('value'))
// console.log(!T[1].hasOwnProperty('value'))
