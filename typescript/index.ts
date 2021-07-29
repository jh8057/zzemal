let Myname:string = 'kim';
let Myname2:string |number = 'kim';
// Myname = 123; => error

// array 안에 string만 들어가야된다.
let arrays :string[] = ['11'] 

// ?는 옵션, 들어와도 되고 없어도 에러내지말라는 옵션
let objs :{name? : string} = { name : 'rlawogus'} 

//  여러개 객체 속성값을 한번에 처리하는 법
type Member2 = {
    [key : string] : string
}
let john : Member2 = { name : 'kim' , age : '123'}

// 타입을 변수로 선언가능
type STR = string;
type SN = string | number;

let Myname3:STR = '123';
let Myname4:SN = 123;

//x는 number여야되고 결과값도 number로 나온다.
function myfunc(x:number) : number{
    return x*2
}

// array에 쓸수있는 tuple타입
type Member = [number,boolean];
let join:Member = [123,true];


class User{
    name :string;
    constructor(name:string){
        this.name = name;
    }
}