'use strict';
//Object-oriented programming
//class : template
//object : instace of a class
// Javascript classes
    // -introduced in ES6
    //- synractical sugar over prototype-based inheritance(계승)

// 1. Class declarations
class Person{
    // constructor
    constructor(name,age){
        // field
        this.name = name;
        this.age = age;
    }

    // methods
    speak(){
        console.log(`${this.name} : hello!`)
    }
}


const zzemal = new Person('zzemal', 20);
// console.log(zzemal.name);
// console.log(zzemal.age);
// zzemal.speak();

// 2.Getter and setters
// age가 -1이 말이 안된다. 이런 잘못된 선언을 바로 잡아주는것이 Getter,setter이다.
class User{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // this.age에 변수를 넣을때 get을 호출하고 get이 set을 호출한다
    get age(){
        // 변수명이 같으면 무한 콜백이 일어나기에 _를 앞에 넣어 변수명을 바꿔준다
        return this._age;
    }
    
    set age(value){
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve','Job',-1);
// console.log(user1.age)


// 3.Fields(public,private)
// 최신이라 아직 적용이 안된 브라우저가 많다.
// #을 붙이면 private변수 선언이고, 이는 class 내부에서만 볼수 있다
class Experiment{
    publicField =2;
    #privateField = 8;

    privateshow(){
        console.log(this.#privateField)
    }
}
const experiment = new Experiment();
// console.log(experiment.publicField)
// console.log(experiment.privateField)
// experiment.privateshow()


// 4.static properties and methods
// 이것도 최신 것이다.
// object에 복사되지 않는 고유의 값을 선언하는 것이다
// 공통적으로 쓰이는 값을 선언하는데 주로 사용된다 -> 메모리 사용량 줄일수있다.
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher )
    }
}

const article1 = new Article(1);
console.log(Article.publisher)
console.log(article1.publisher)

// 5.Inheritance(상속)
// a way for one class to extend another class
// extends 를 사용하면 상속이 된다.
class Shape{
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color!`)
    }
    getArea(){
        return this.width * this.height
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        // overidding 하면서 기존의 부모에 있던 함수도 같이 사용하고 싶다면
        // super!
        super.draw()
        console.log('🔺')
    }
    // overidding : 덮어쓰기가 가능하다.
    getArea(){
        return (this.width * this.height)/2
    }
}

const rectangle = new Rectangle(20,20,'red');
const triangle = new Triangle(20,20,'yello');
rectangle.draw()
console.log(rectangle.getArea())
triangle.draw()
console.log(triangle.getArea())


// 6. class checking : instanceof
console.log(rectangle instanceof Rectangle)
console.log(triangle instanceof Rectangle)
console.log(triangle instanceof Shape)
console.log(triangle instanceof Object)