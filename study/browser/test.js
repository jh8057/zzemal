let userList = [
  { name: "mike", age: 30 },
  { name: "mike1", age: 10 },
  { name: "mike2", age: 20 },
  { name: "mike3", age: 40 },
  { name: "mike4", age: 50 },
  { name: "mike5", age: 60 },
];

let result = userList.reduce((prev, cur) => {
  console.log(prev, cur);
  console.log(cur.age);
  if (cur.age > 44) {
    prev.push(cur.name);
  }
  return prev;
}, []);

console.log("result : ", result);
