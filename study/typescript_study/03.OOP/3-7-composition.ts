{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }
  interface MilkMaker {
    MakeMilk(cup: CoffeeCup): CoffeeCup;
  }
  interface SugarMaker {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }
  // public // private // protected
  class CoffeMachine implements CoffeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance(object) level

    constructor(
      coffeeBeans: number,
      private milk: MilkMaker,
      private sugar: SugarMaker
    ) {
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
    private extract(shots: number): CoffeeCup {
      console.log(`pulling ${shots}`);
      return {
        shots,
      };
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);
      const sugarcoffee = this.sugar.addSugar(coffee);
      return this.milk.MakeMilk(sugarcoffee);
    }
    clean() {
      console.log("cleaning the machine");
    }
  }

  // 우유
  // 싸구려 우유 거품기
  class CheapMilkSteamer implements MilkMaker {
    private steamMike(): void {
      console.log("STEAM MILK!!");
    }
    MakeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMike();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  // 고오급 우유 거품기
  class FancyMilkSteamer implements MilkMaker {
    private steamMike(): void {
      console.log("FANCY STEAM MILK!!");
    }
    MakeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMike();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  // NO 우유 거품기
  class noMilk implements MilkMaker {
    MakeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 설탕
  // 설탕제조기
  class SugarMixer implements SugarMaker {
    private getSuger() {
      console.log("Getting Suger 🍰");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSuger();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }
  // cold 설탕제조기
  class ColdSugarMixer implements SugarMaker {
    private getSuger() {
      console.log("Getting COLD Suger 🍰");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSuger();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }
  // NO 설탕제조기
  class noSugar implements SugarMaker {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 다형성 사용 장점 - 공통된 API를 사용
  const machines: CoffeMaker[] = [
    new CoffeMachine(16, new noMilk(), new noSugar()),
    new CoffeMachine(16, new CheapMilkSteamer(), new noSugar()),
    new CoffeMachine(16, new noMilk(), new SugarMixer()),
    new CoffeMachine(16, new CheapMilkSteamer(), new SugarMixer()),
    new CoffeMachine(16, new FancyMilkSteamer(), new ColdSugarMixer()),
  ];

  machines.forEach((machine) => {
    console.log("---------------------");
    machine.makeCoffee(1);
  });
}
