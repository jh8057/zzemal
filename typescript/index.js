var Myname = 'kim';
var Myname2 = 'kim';
// Myname = 123; => error
// array 안에 string만 들어가야된다.
var arrays = ['11'];
// ?는 옵션, 들어와도 되고 없어도 에러내지말라는 옵션
var objs = { name: 'rlawogus' };
var john = { name: 'kim', age: '123' };
var Myname3 = '123';
var Myname4 = 123;
//x는 number여야되고 결과값도 number로 나온다.
function myfunc(x) {
    return x * 2;
}
var join = [123, true];
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
