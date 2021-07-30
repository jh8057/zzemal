let superobj = { superVal: 'super',
    abc : 10,
    third:function(){
    return this.abc*3
    }
}

// let subobj = { subVal: 'sub'}
// subobj.__proto__ =superobj
let subobj = Object.create(superobj)
subobj.subVal = 'sub'
subobj.first = 10
subobj.twice = function(){
    return this.first*2
}
debugger
console.log('sub.subval = ',subobj.subVal)
console.log('sub.superval = ',subobj.superVal)
subobj.superVal = 'add new'
console.log('sub.superval = ',subobj.superVal)
console.log('super.superval = ',superobj.superVal)
console.log('subobj = ',subobj)
console.log('superobj = ',superobj)
console.log('subobj twice = ',subobj.twice())
console.log('subobj third = ',subobj.third())