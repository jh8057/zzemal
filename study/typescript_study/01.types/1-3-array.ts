{
    // Array

    const fruits:string[] = ["사과","바나나"]
    const scores:Array<number> = [1,2,3,4]

    function printArray(fruits : readonly string[]){
        // fruits.push() // readonly 라서 사용불가
    }

    // Tuple
    // 서로 다른 타입을 담을 수 있는 배열
    // index로 접근할 수 있는데, 이러면 매번 찾아가서 확인해 줘야된다
    // 이 말은 가독성이 떨어진다는 의미 -> interface, type alias, class로 대체해주자
    let student : [string,number];
    student = ['name',0]
    student[0]; // name
    student[1]; // 0

    const [name,age] = student; //react에서 useState사용할때 이렇게 사용한다. 이럴때 tuple사용된다.
    // 동적으로 묶을 경우 아니면  interface, type alias, class로 대체 가능한지 확인해보자
}