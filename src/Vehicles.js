/*function Vehicle {
  this.id = 0;
  this.type;
  this.positionX = 0;
  this.positionY = 0;
  this.velocity = 0;
  this.maxVelocity = 0;
  this.slowProbability = 0.05;
}*/

class Vehicle {
  constructor(id, type, positionX, positionY, velocity, max_velocity, destination_id) {
    this._id = id;
    this._type = type;
    this._positionX = positionX;
    this._positionY = positionY;
    this._velocity = velocity;
    this._max_velocity = max_velocity;
    this._destination_id = destination_id;
    this._slowProbability = 0.5;
  }
  //-------getters
  get id() {
    return this._id;
  }

  get destionation_id() {
    return this._destination_id;
  }

  get type() {
    return this._type;
  }

  get positionX() {
    return this._positionX;
  }

  get positionY() {
    return this._positionY;
  }

  get velocity() {
    return this._velocity;
  }

  //--------setters

  set positionX(x) {
    this._positionX = x;
  }

  set positionY(x) {
    this._positionY = x;
  }

  set velocity(x) {
    this._velocity = x;
  }

  //-------------methods

  accelerate() {
    if (this._velocity + 1 >= this._max_velocity) {
      this._velocity = this._max_velocity;
    } else {
      this._velocity += 1;
    }
  }

  decelerate() {
    if (this._slowProbability > Math.random()) {
      this._velocity -= 1;
    }
  }

  changeVelocity() {
    this.accelerate();
    this.decelerate();
  }

  move() {
    this._positionX += this._velocity;
  }

  equals(x) {
    if (this == x) return true;
    if (x instanceof Vehicle) {
      return this.id == x.id;
    }
    return false;
  }
}

var mycar = new Vehicle(1, 'Truck', 1, 1, 3, 8);
/*console.log(mycar._velocity);
//check for velocity and move
mycar.changeVelocity();
console.log(mycar._velocity);
mycar.move();
console.log(mycar._positionX);
//check for setter and getter

console.log("pos2 = ", pos2);*/
//check for equals ()
var mycar2 = new Vehicle(1, 'Truck', 1, 1, 5, 8);
var ans = mycar.equals(mycar2);
console.log(ans);
