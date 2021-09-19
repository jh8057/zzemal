type PositionType = {
  x: number;
  y: number;
};
interface PositionInterface {
  x: number;
  y: number;
}

// object
const obj1: PositionType = { x: 1, y: 2 };
const obj2: PositionInterface = { x: 1, y: 2, z: 3 };

// class
class pos1 implements PositionType {
  x: number;
  y: number;
}
class pos2 implements PositionType {
  x: number;
  y: number;
}

// Extends
interface ZPositionInterface extends PositionInterface {
  z: number;
}
type ZPositionType = PositionType & { z: number };

// only interface can be merge
interface PositionInterface {
  z: number;
}
// type PositionType{
// }

// Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};

type Name = Person["name"]; //string

type Numbertype = number;
type Direction = "left" | "right";
