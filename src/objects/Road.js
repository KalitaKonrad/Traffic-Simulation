import VEHICLES_CONST from './consts/vehicles.const';
import Vehicle from './Vehicles.js';

export default class Road {
  constructor(roadArray, vehicles, length, width, velocityLimit, id) {
    this.roadArray = new Array(width).fill(null).map(() => new Array(length).fill(null));
    this.length = length;
    this.width = width;
    this.velocityLimit = velocityLimit;
    this.id = id;
    this.vehicles = [];
  }

  addVehicle(vehicle) {
    this.roadArray[vehicle.y][vehicle.x] = vehicle;
    this.vehicles.push(vehicle);
  }

  checkCollision(vehicle) {
    let distance = 0;
    for (let i = vehicle.x + 1; i < this.length; i++) {
      if (this.roadArray[vehicle.x][i] != null) {
        distance = i - vehicle.x - 1;
        break;
      }
    }
  }

  update() {
    let toRemove = [];
    this.vehicles.forEach((v) => {
      v.changeVelocity();
      if (v.velocity > this.velocityLimit) {
        v.velocity = this.velocityLimit;
      }
      this.checkCollision(v);

      if (v.x + v.velocity < this.length) {
        v.move();
        this.roadArray[v.y][v.x] = v;
      } else {
        toRemove.push(v);
        this.roadArray[v.y][v.x] = null;
      }
      if (v.velocity > 0) {
        this.roadArray[v.y][v.x - v.velocity] = null;
      }
      // TODO:  vehicles.removeAll(toRemove);
    });
  }

  toString() {
    let result = 'Road not initialized';

    if (this.roadArray != null) {
      result = '';
      for (let i = 0; i < this.roadArray.length; i++) {
        for (let j = 0; j < this.roadArray[0].length; j++) {
          if (this.roadArray[i][j] == null) result += '-';
          else {
            if (this.roadArray[i][j].type === VEHICLES_CONST.TRUCK) result += 'T';
            else {
              if (this.roadArray[i][j].type === VEHICLES_CONST.CAR) result += this.roadArray[i][j].velocity;
              else result += '?';
            }
          }
        }
        result += '\n';
      }
    }
    return result;
  }
}
