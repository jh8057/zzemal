{
    type CoffeeCup = {
        shots: number;
        hasMilk:boolean;
    }

    interface CoffeMaker{
        makeCoffee(shots:number):CoffeeCup;
    }

    interface CommercialCoffeMaker{
        makeCoffee(shots:number):CoffeeCup;
        fillCoffeeBeans(beans:number):void;
        clean():void;
    }

    // public
    // private
    // protected
    class CoffeMachine implements CoffeMaker,CommercialCoffeMaker{
        private static BEANS_GRAMM_PER_SHOT:number = 7 // class level
        private coffeeBeans:number = 0; // instance(object) level

        private constructor(coffeeBeans:number){
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

    // const maker2:CommercialCoffeMaker = CoffeMachine.makeMachine(32);
    // maker2.clean();
    // maker.fillCoffeeBeans(32);

    class AmateurUser{
        constructor(private machine:CoffeMaker){}
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee)
        }
    }
    class ProBarista{
        constructor(private machine: CommercialCoffeMaker){}
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee)
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }

    const maker : CoffeMachine = CoffeMachine.makeMachine(32);
    const amateur = new AmateurUser(maker);
    const pro = new ProBarista(maker);
    amateur.makeCoffee()
    console.log("/////////////////")
    pro.makeCoffee()
}