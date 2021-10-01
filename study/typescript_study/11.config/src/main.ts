"use strict";
{
  class myCar {
    engine = 0;
    move() {
      const engine = this.engine + 1;
      console.log(engine);
    }
  }

  const mycar1 = new myCar();
  mycar1.move();
}
