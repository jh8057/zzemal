const calculator = {
    plus : function(a,b){
        return a+b
    },
    minus : function(a,b){
        return a-b
    },
    multiple : function(a,b){
        return a*b
    },
    divide : function(a,b){
        return a/b
    },
    pow : function(a,b){
        return a**b
    }
}

const result1 = calculator.plus(5,5);
const result2 = calculator.pow(5,5);
console.log( result1,result2)