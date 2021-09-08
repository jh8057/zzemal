{
    // type inference
    // 선언하면서 동시에 할당할 경우, 뻔한 타입은 따로 정의하지 않아도 알아서 유추해준다.
    let text = "hello";

    // message에 any가 할당된다. -> 별로다, 명시해주자
    function print(message){
        console.log(message)
    }

    // 이렇게 기본값을 할당해줘도 알아서 유추한다.
    function print2(message='hellp'){
        console.log(message)
    }

    // print2(2) //error

    // number와 number가 더해졌으니 number가 유추됨.
    function add1(x:number,y:number){
        return x+y
    }

    // add에서 return 된 값이 number 이므로 result도 result가 된다.
    const result = add1 (1,2);

    // 그러나 최대한 타입추론을 생각하지말고, 적어주는 습관을 들이자!
}