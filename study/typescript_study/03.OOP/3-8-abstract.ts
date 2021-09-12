{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // public // private // protected
  abstract class CoffeMachine implements CoffeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance(object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }
    private grindBeans(shots: number) {
      console.log(`grind ${shots}`);
      if (this.coffeeBeans < shots * CoffeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee");
      }
      this.coffeeBeans -= shots * CoffeMachine.BEANS_GRAMM_PER_SHOT;
    }
    private preheat(): void {
      console.log("heat");
    }
    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
    clean() {
      console.log("cleaning the machine");
    }
  }
  class CaffeLatteMachine extends CoffeMachine {
    constructor(beans: number, public readonly serialNum: string) {
      super(beans);
    }
    private steamMike(): void {
      console.log("STEAM MILK!!");
    }
    protected extract(shots: number): CoffeeCup {
      this.steamMike();
      return {
        shots,
        hasMilk: true,
      };
    }
  }
  class SweetCoffeMaker extends CoffeMachine {
    private makeSweet() {
      console.log("Make SWEEEEEET~~!");
    }
    protected extract(shots: number): CoffeeCup {
      this.makeSweet();
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const lattemachine = new CaffeLatteMachine(23, "SSS");
  const coffee = lattemachine.makeCoffee(1);
  // console.log(coffee)
  // console.log(lattemachine.serialNum)
  console.log("///////////////////////");
  const sweetMachine = new SweetCoffeMaker(23);
  const sweetcoffee = sweetMachine.makeCoffee(1);
  // console.log(sweetcoffee)

  console.log("///////////////////////");
  console.log(lattemachine.makeCoffee(1));
  console.log(sweetMachine.makeCoffee(1));

  console.log("///////////////////////");
  // 다형성 사용 장점 - 공통된 API를 사용
  const machines: CoffeMaker[] = [
    new CaffeLatteMachine(16, "A GRADE"),
    new SweetCoffeMaker(16),
    new CaffeLatteMachine(16, "A GRADE"),
    new SweetCoffeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log("---------------------");
    machine.makeCoffee(1);
  });
}
