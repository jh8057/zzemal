'use strict'

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index Position
const fruits = ['사과','바나나'];
console.log(fruits);
console.log(fruits.length)
console.log(fruits[0]);

// 3.Looping over an array
for ( let fruit of fruits){
    console.log(fruit)
}

fruits.forEach((el,index)=>console.log(el,index))
console.clear()
// 4.Addtion,delection , copy
// push
fruits.push('딸기','사과')
console.log(fruits)

// pop : remove
fruits.pop();
console.log(fruits)

//unshift
fruits.unshift('딸기')
console.log(fruits);

// shift
fruits.shift()
console.log(fruits);

// splice
fruits.splice(1,1,'수박');
console.log(fruits);

// concat
const fruit2 = [4,5,4];
const test = fruits.concat(fruit2);
console.log(test)

//spread operator
const fruit3 = [6,7];
const test2 = [...fruit2,...fruit3]
console.log(test2)


// 5. Searching
console.clear();
console.log(fruits.indexOf('사과'))
console.log(fruits.includes('사과'))
fruits.push('사과')
console.log(fruits.lastIndexOf('사과'))
console.log(fruits)

console.clear();
// Quiz
// Q1. make a string out of an array
const fruits1 = ['apple', 'banana', 'orange'];
const fruit1string = fruits1.join(", ")
console.log("answer1 : ",fruit1string)

// Q2. make an array out of a string
const fruits2 = '🍎, 🥝, 🍌, 🍒';
const fruits2arr = fruits2.split(",")

console.log("answer2 : ",fruits2arr)

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
const array = [1, 2, 3, 4, 5];
console.log("answer3 : ",array.reverse())
}
// Q4. make new array without the first two elements
{
const array = [1, 2, 3, 4, 5];
const newarray1 = array.slice(2)
console.log("answer4 : ",newarray1)
// console.log(array) //기존배열에 변경없음, splice는 기존 배열 변경됨

}
  
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
new Student('A', 29, true, 45),
new Student('B', 28, false, 80),
new Student('C', 30, true, 90),
new Student('D', 40, false, 66),
new Student('E', 18, true, 88),
];
console.clear()
// Q5. find a student with the score 90

const result = students.find(el=>el['score'] === 90 )
console.log("answer5 : ",result)

// Q6. make an array of enrolled students
const result2 = students.filter(el=>el['enrolled'])
console.log("answer6 : ",result2)

// Q7. make an array containing only the students' scores
const result3 = students.map(el=>el.score)
console.log("answer7 : ",result3)

// Q8. check if there is a student with the score lower than 50
const hasLowerScore = students.some(el=>el.score < 50)
console.log("answer8 : ",hasLowerScore)

// every는 모든 요소가 함수의 조건에 충족해야 true가 나온다.
const everyLowerScore = students.every(el=>el.score >= 50)
console.log(everyLowerScore)
console.clear()
// Q9. compute students' average score
const result4 = students.reduce((prev,cur)=>{
    console.log('------------')
    console.log(prev)
    console.log(cur)

    return prev + cur.score
},0);
console.log("answer9 : ",result4/students.length)

// Q10. make a string containing all the scores
const result5 = students.map(el=>el.score).join(", ")
console.log("answer10 : ",result5)
console.log(typeof(result5))

// Bonus! do Q10 sorted in ascending order
const result6 = students.map(el=>el.score).sort((a,b)=>a-b).join(", ")
console.log("answer11 : ",result6)
console.log(typeof(result6))