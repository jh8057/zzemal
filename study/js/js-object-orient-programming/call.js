let UZ = {
    name : "UZ",
    age : "secret",
    first : 10,
    second : 30,
    }

function sum(prefix){
    return prefix + (this.first+this.second)
}
let kim = {name:'kim',first:10,second:20}
console.log('kim',sum.call(UZ,'😀 '))

console.log('UZ',sum.call(kim,'😁 '))

let kimsum = sum.bind(kim,'⚡')
console.log('kimsum',kimsum())