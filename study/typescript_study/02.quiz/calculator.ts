{
 /**
 * Let's make a calculator 🧮
 */
type methods = 'add'|'substract'|'multiply'|'divide'|'remainder'
function calculate(method:methods,...value:number[]):number{
    console.log(method)
    switch(method){
        case "add":
            return value.reduce((acc,cur)=>acc+cur)
        case "substract":
            return value.reduce((acc,cur)=>acc-cur)
        case "multiply":
            return value.reduce((acc,cur)=>acc*cur)
        case "divide":
            return value.reduce((acc,cur)=>acc/cur)
        case "remainder":
            return value.reduce((acc,cur)=>acc%cur)
        default:
            throw new Error('unknown error')
    }
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
}