{
  class myCar {
    engine = 0;
    move() {
      const engine = this.engine + 1;
      console.log("engine bug!!!");
      console.log(engine);
    }
  }

  const car = new myCar();
  car.move();
}
