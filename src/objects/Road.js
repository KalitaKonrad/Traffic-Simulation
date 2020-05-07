import { VEHICLE_TYPE } from '../consts/vehicles.const';
import Intersection from './Intersection';

export default class Road {
  constructor(length = 100, width = 3, velocityLimit = 10) {
    this.length = length;
    this.width = width;
    this.velocityLimit = velocityLimit;

    this.roadArray = new Array(width).fill(null).map(() => new Array(length).fill(null));
    this.vehicles = [];

    this.intersectionOut = null;
  }

  setIntersection(intersection) {
    this.intersectionOut = intersection;
  }

  addVehicle(vehicle) {
    this.roadArray[vehicle.y][vehicle.x] = vehicle;
    this.vehicles.push(vehicle);
  }

  checkCollision(vehicle) {
    let distance = 0;
    for (let i = vehicle.x + 1; i < this.length; i++) {
      if (this.roadArray[vehicle.y][i] !== null) {
        distance = i - vehicle.x - 1;
        vehicle.velocity = Math.min(distance, vehicle.velocity);
        return;
      }
    }
  }

  slowDownBeforeIntersection(vehicle) {
    let distance = this.length - vehicle.x - 1;
    if (vehicle.velocity > distance - 1) {
      distance > 0 ? (vehicle.velocity = distance) : (vehicle.velocity = 0);
    }
  }

  update() {
    let newVehicles = [];
    this.vehicles.forEach((v) => {
      v.changeVelocity();
      if (v.velocity > this.velocityLimit) {
        v.velocity = this.velocityLimit;
      }

      if (this.intersectionOut.lights === 1) {
        this.slowDownBeforeIntersection(v);
      }

      this.checkCollision(v);

      if (v.x + v.velocity < this.length) {
        v.move();
        this.roadArray[v.y][v.x] = v;
        newVehicles.push(v);
      } else {
        this.roadArray[v.y][v.x] = null;
        if (this.intersectionOut.id !== v.id) {
          this.intersectionOut.addVehicleFromRoad(v);
        }
      }

      if (v.velocity > 0) {
        this.roadArray[v.y][v.x - v.velocity] = null;
      }
    });
    this.vehicles = newVehicles;
  }

  toString() {
    let result = 'Road not initialized';

    if (this.roadArray !== null) {
      result = '';
      for (let i = 0; i < this.roadArray.length; i++) {
        for (let j = 0; j < this.roadArray[0].length; j++) {
          if (this.roadArray[i][j] == null) result += '-';
          else {
            if (this.roadArray[i][j].type === VEHICLE_TYPE.TRUCK) result += 'T';
            else {
              if (this.roadArray[i][j].type === VEHICLE_TYPE.CAR) result += this.roadArray[i][j].velocity;
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
