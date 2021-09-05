{
    type CoffeeCup = {
        shots: number;
        hasMilk:boolean;
    }

    // public
    // private
    // protected
    class CoffeMaker{
        private static BEANS_GRAMM_PER_SHOT:number = 7 // class level
        private coffeeBeans:number = 0; // instance(object) level

        private constructor(coffeeBeans:number){
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans:number): CoffeMaker{
            return new CoffeMaker(coffeeBeans)
        }

        fillCoffeeBeans(beans:number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
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

    const maker = CoffeMaker.makeMachine(32);
    maker.fillCoffeeBeans(32);
    

    class User{

        private internalAge = 4;
        get age():number{
            return this.internalAge;
        }
        set age(num:number){
            if(num < 0){
                throw new Error('age should be bigger than 0')
            }
            this.internalAge = num;
        }

        age2 = 16;

        // 일반 변수처럼 사용하고 싶은데, 계산이 필요하거나 할때 사용
        // 일반 변수를 불러오는것처럼 사용하면 된다.
        get fullName():string{
            return `${this.firstName} ${this.lastName}`
        }
        constructor(public firstName:string, private lastName :string){
            // this.fullName = `${firstName} ${lastName}`
        }
    }

    const user = new User('steve','jobs')
    console.log(user.fullName)
    user.age =6;

    user.firstName = "Ellie"
    console.log(user.fullName,user.age,user.age2)
}