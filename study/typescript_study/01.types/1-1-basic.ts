{
    // JavaScript
    // Primitive : number , string , boolean,null ...
    // object : function, array ...


    // number
    const num:number = 1

    // string
    const str:string = "hello"

    // boolean
    const bool :boolean = true;

    // undefined 
    // 단독으로 선언되진 않는다
    let age:number | undefined
    age = undefined
    age = 1;

    // 보통 이렇게 무언가 있거나 혹은 없거나 같은 선언을 할 때 자주 사용된다.
    function find():number | undefined{
        return 1
    }

    // null
    // 단독으로 선언되진 않는다
    let person:null;
    let person2:string | null;

    // unknown - 알수 없는 
    // 기존 자바스크립처럼 모든 선언 가능하다 -> 모호하다. -> 최대한 피한다
    let notSure:unknown  = 0;
    notSure = "he"

    // any
    // unknown은 점점 좁혀져서 타입을 나중에라도 지정해줘야되는 의미가 있지만,
    // any는 완전 자유라서 컴파일 에러도 나오지 않는다 -> 취지에 맞지 않는 타입 -> 피하자
    let anything:any = 0;
    anything = "he"

    // void 
    // 아무것도 return 하지 않는 값
    function print():void{
        console.log("hello")
    }

    // never
    // 절대 return하지 않는 함수
    function throwError(message:string):never{
        throw new Error(message)
    }

    // object
    // 이 친구도 광범위 하기에 조금더 구체적으로 명시해주는 것이 좋다.
    let obj:object
    function acceptObject(obj:object){

    }
    
}