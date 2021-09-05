{
    // Type Aliases

    type Text = string;
    const name : Text = 'zzemal'

    type Num = number;
    const num :Num= 0;

    type Student = {
        name : string;
        age :number;
    }

    const student :Student ={
        // animal:"dog" //이렇게 Student에 선언해주지 않은 값을 불러오면 에러가 뜬다.
        name : "zzemal",
        age : 10,
    }
    console.log(student);

    // String Literal Type
    // 똑같은 string을 넣어줘야만 에러가 안난다
    type Name = "name"

    let zzemalName :Name = "name"

    type boal = true;
    const isCat:boal = true;
}