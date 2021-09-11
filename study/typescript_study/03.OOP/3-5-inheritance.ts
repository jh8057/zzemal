{
    type CoffeeCup = {
        shots: number;
        hasMilk:boolean;
    }

    interface CoffeMaker{
        makeCoffee(shots:number):CoffeeCup;
    }

    // public // private // protected
    class CoffeMachine implements CoffeMaker{
        private static BEANS_GRAMM_PER_SHOT:number = 7 // class level
        private coffeeBeans:number = 0; // instance(object) level

        constructor(coffeeBeans:number){
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans:number): CoffeMachine{
            return new CoffeMachine(coffeeBeans)
        }

        fillCoffeeBeans(beans:number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }
        private grindBeans(shots:number){
            console.log(`grind ${shots}`)
            if(this.coffeeBeans < shots * CoffeMachine.BEANS_GRAMM_PER_SHOT){
                throw new Error("Not enough coffee");
            }
            this.coffeeBeans -= shots * CoffeMachine.BEANS_GRAMM_PER_SHOT;
        }
        private preheat():void{
            console.log('heat')
        }
        private extract(shots:number):CoffeeCup{
            console.log(`pulling ${shots}`)
            return{
                shots,
                hasMilk : false,
            }
        }
        makeCoffee(shots:number) :CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots)
        }
        clean(){
            console.log('cleaning the machine')
        }

    }
    class CaffeLatteMachine extends CoffeMachine{
        constructor(beans:number,public readonly serialNum :string){
            super(beans)
        }
        private steamMike():void{
            console.log("STEAM MILK!!")
        }
        makeCoffee(shots:number):CoffeeCup{
            const coffee = super.makeCoffee(shots)
            this.steamMike()
            return{
                ...coffee,
                hasMilk :true
            }
        }
    }
    
    const machine = new CoffeMachine(23);
    const lattemachine = new CaffeLatteMachine(23,"SSS");

    const coffee = lattemachine.makeCoffee(1)
    console.log(coffee)
    console.log(lattemachine.serialNum)


}