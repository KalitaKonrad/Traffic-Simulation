import VEHICLES_CONST from '../consts/vehicles.const';

export default class Vehicle {
  constructor(x, y, type = VEHICLES_CONST.CAR, velocity = 0, maxVelocity = 10, destinationId = 1) {
    this.x = x;
    this.y = y;

    this.type = type;
    this.velocity = velocity;
    this.maxVelocity = maxVelocity;
    this.destinationId = destinationId;

    this.slowProbability = 0.05;
  }

  accelerate() {
    if (this.velocity + 1 >= this.maxVelocity) {
      this.velocity = this.maxVelocity;
    } else {
      this.velocity += 1;
    }
  }

  decelerate() {
    if (this.slowProbability > Math.random()) {
      this.velocity -= 1;
    }
  }

  changeVelocity() {
    this.accelerate();
    this.decelerate();
  }

  move() {
    this.x += this.velocity;
  }

  equals(x) {
    return this === x;
  }
}
