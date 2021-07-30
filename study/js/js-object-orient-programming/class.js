'use strict'; 
class person{
    constructor(name,first,second){
        this.name = name
        this.first = first
        this.second = second
        console.log('constructor')
    }
    sum(){
        return (this.first+this.second)
    }
}

class personplus extends person{
    constructor(name,first,second,third){
        super(name,first,second)
        this.third = third
    }
    sum(){
        return  ' prototype😀 '+ (super.sum()+this.third)
    }
    avg(){
        return (this.first+this.second+this.third)/3
    }
}

let kim = new personplus('kim',10,20,30)
console.log('kim : ',kim)
console.log('kim : ',kim.sum())
console.log('kim : ',kim.avg())