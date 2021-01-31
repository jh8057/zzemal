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
let lee = new person('lee',10,10,10)
console.log('newperson', lee)
console.log('newperson', lee.sum())
console.log('newperson', kim.sum())