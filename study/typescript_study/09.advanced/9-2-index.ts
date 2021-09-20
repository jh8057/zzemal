{
  const obj = {
    name: "zzemal",
  };
  console.log(obj.name);
  console.log(obj["name"]);

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };
  type Name = Animal["name"]; //string
  const text: Name = "hello";

  type Gender = Animal["gender"]; //"male" | "female";
  const male: Gender = "male";

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const animal: Keys = "age";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };

  const person: Person = {
    name: "string",
    gender: "male",
  };

  type ValueOf<T> = T[keyof T];
  type Foo = { a: string; b: number };
  type ValueOfFoo = ValueOf<Foo>; // string | number
}
