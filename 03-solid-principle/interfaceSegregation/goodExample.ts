  interface Flyable {
    fly();
  }

  interface Movable {
    start();
    stop();
  }

  interface Vehicle {
    name: string;
    color: string;
  }

  class Airplane implements Flyable, Movable, Vehicle {
    constructor(public name: string, public color: string) {}

    start() {
      console.log("start!");
    }
    stop() {
      console.log("stop!");
    }
    fly() {
      console.log("fly!");
    }
  }

  class Car implements Movable, Vehicle {
    constructor(public name: string, public color: string) {}
    start() {
      console.log("start!");
    }
    stop() {
      console.log("stop!");
    }
    fly() {
      throw new Error("車は空を飛べません");
    }
  }

  function run() {
    const v1 = new Airplane("AirBus", "white");
    const v2 = new Car("Prius", "black");

    v1.fly();
    v2.start();
  }

  run();
