"use strict";
{
    var myCar = /** @class */ (function () {
        function myCar() {
            this.engine = 0;
        }
        myCar.prototype.move = function () {
            var engine = this.engine + 1;
            console.log(engine);
        };
        return myCar;
    }());
    var mycar1 = new myCar();
    mycar1.move();
}
