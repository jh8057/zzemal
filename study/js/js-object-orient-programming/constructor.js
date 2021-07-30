function person(name, age , first,second){
    this.name = name
    this.age = age
    this.first = first
    this.second = second
}

person.prototype.sum = function(){
    return this.first+this.second;
}
let kim = new person('kim',10,20,30)
kim.sum = function(){
    return 'Special ' + (this.first+this.second);
}
let lee = new person('lee',10,10,10)
console.log('newperson', lee)
console.log('newperson', lee.sum())
console.log('newperson', kim.sum())

function personplus(name,age,first,second,third){
    person.call(this,name,age,first,second)
    this.third = third
}

let q = new personplus("q",3,3,3,3)
console.log("personplus" , q)