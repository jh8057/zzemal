let superobj = { superVal: 'super'}

let subobj = { subVal: 'sub'}
subobj.__proto__ =superobj

console.log('sub.subval = ',subobj.subVal)
console.log('sub.superval = ',subobj.superVal)
subobj.superVal = 'add new'
console.log('sub.superval = ',subobj.superVal)
console.log('super.superval = ',superobj.superVal)
console.log('subobj = ',subobj)