{
    type CoffeeCup = {
        shots: number;
        hasMilk:boolean;
    }

    class CoffeMaker{
        static BEANS_GRAMM_PER_SHOT:number = 7 // class level
        coffeeBeans:number = 0; // instance(object) level

        constructor(coffeeBeans:number){
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans:number): CoffeMaker{
            return new CoffeMaker(coffeeBeans)
        }

        makeCoffee(shots:number) :CoffeeCup {
            if(this.coffeeBeans < shots * CoffeMaker.BEANS_GRAMM_PER_SHOT){
                throw new Error("Not enough coffee");
            }
            this.coffeeBeans -= shots * CoffeMaker.BEANS_GRAMM_PER_SHOT;
            return{
                shots,
                hasMilk : false,
            }
        }

    }

    const maker = new CoffeMaker(32)
    console.log(maker)
    const maker2 = new CoffeMaker(14)
    console.log(maker2)
    const maker3 = CoffeMaker.makeMachine(60);
    console.log(maker3)
}