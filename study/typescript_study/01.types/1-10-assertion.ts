{
    // Type Assertion 
    // 강.제 하는것이기에 별로다

    function jsStrFunc():any{
        return 'hello'
    }

    const result = jsStrFunc();
    const a1 = (result as string).length; // 방법1.

    console.log(a1)

    function findNum():number[]|undefined{
        return undefined
    }

    const testnum = findNum();
    // testnum.push(); //possibly
    testnum!.push(3);  // 방법2. 확신을 가지고 배열이라고 생각할때 
}