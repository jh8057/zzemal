{
    function add(num1:number,num2:number):number{
        return num1 + num2
    }

    function jsFetchNum(id:string):Promise<number>{
        return new Promise((resolve,reject)=>{
            resolve(100);
        })
    }

    // optional parameter
    function printName(first:string,last?:string){
        console.log(first)
        console.log(last)
    }

    printName('steve','jobs')
    printName('steve')

    // default parameter
    function printMessage(message:string = 'default message'){
        console.log(message)
    }
    printMessage()

    // rest parameter
    function addNum(...numbers:number[]):number{
        return numbers.reduce((acc,cur)=>acc+cur)
    }

    console.log(addNum(1,2,3,4))
    console.log(addNum(5,7,9,16,5,4,9))
}