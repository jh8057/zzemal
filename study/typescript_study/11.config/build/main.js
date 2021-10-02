"use strict";
{
    var myCar = /** @class */ (function () {
        function myCar() {
            this.engine = 0;
        }
        myCar.prototype.move = function () {
            var engine = this.engine + 1;
            console.log("engine bug!!!");
            console.log(engine);
        };
        return myCar;
    }());
    var car = new myCar();
    car.move();
}
//# sourceMappingURL=main.js.map