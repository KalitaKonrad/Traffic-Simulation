import { VEHICLE_TYPE } from '../consts/vehicles.const';

export default class Road {
  /**
   * Road class used to simulate traffic in Nagel-Schreckenberg model.
   *
   * @param {int} length                  This is the total length of the road.
   * @param {int} width                   Number of the lanes in the road.
   * @param {int} velocityLimit           Speed Limit, max velocity on the entire road.
   */
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

  putVehicle(vehicle) {
    let possibleLocations = [];

    for (let i = 0; i < this.width; i++) {
      if (this.roadArray[i][0] === null) possibleLocations.push(i);
    }

    vehicle.x = 0;
    vehicle.y = possibleLocations[Math.floor(Math.random() * possibleLocations.length)];
    this.addVehicle(vehicle);
  }

  checkCollision(vehicle) {
    let distance = 0;
    for (let i = vehicle.x + 1; i < this.length; i++) {
      if (this.roadArray[vehicle.y][i] !== null) {
        distance = i - vehicle.x - 1;
        // vehicle.velocity = Math.min(distance, vehicle.velocity);
        break;
      }
    }
    if (distance !== 0 && vehicle.velocity > distance - 1) {
      if (!this.switchLaneLeft(vehicle)) {
        vehicle.velocity = distance - 1;
      }
    }
    if (vehicle.velocity > 0) {
      this.switchLaneRight(vehicle);
    }
    return vehicle;
  }

  slowDownBeforeIntersection(vehicle) {
    let distance = this.length - vehicle.x - 1;
    if (vehicle.velocity > distance - 1) {
      distance > 0 ? (vehicle.velocity = distance) : (vehicle.velocity = 0);
    }
  }

  switchLaneLeft(vehicle) {
    if (vehicle.y > 0) {
      let prev = {
        x: 0,
      };
      let next = {
        x: this.length,
      };
      for (let i = vehicle.x; i > 0; i--) {
        if (this.roadArray[vehicle.y - 1][i] !== null) {
          prev = this.roadArray[vehicle.y - 1][i];
          break;
        }
      }
      for (let i = vehicle.x; i < this.length; i++) {
        if (this.roadArray[vehicle.y - 1][i] !== null) {
          next = this.roadArray[vehicle.y - 1][i];
          break;
        }
      }

      if (next.x === this.length && prev.x === 0) {
        vehicle.y -= 1;
        this.roadArray[vehicle.y + 1][vehicle.x] = null;
        return true;
      }

      if (prev.velocity < vehicle.x - prev.x - 1 || prev.x === 0) {
        if (vehicle.velocity < next.x - vehicle.x - 1 || next.x === this.length) {
          vehicle.y -= 1;
          this.roadArray[vehicle.y + 1][vehicle.x] = null;
          return true;
        }
      }
    }
    return false;
  }

  switchLaneRight(vehicle) {
    if (vehicle.y < this.width - 1) {
      let prev = {
        x: 0,
      };
      let next = {
        x: this.length,
      };
      for (let i = vehicle.x; i > 0; i--) {
        if (this.roadArray[vehicle.y + 1][i] !== null) {
          prev = this.roadArray[vehicle.y + 1][i];
          break;
        }
      }
      for (let i = vehicle.x; i < this.length; i++) {
        if (this.roadArray[vehicle.y + 1][i] !== null) {
          next = this.roadArray[vehicle.y + 1][i];
          break;
        }
      }
      if (next.x === this.length && prev.x === 0) {
        vehicle.y += 1;
        this.roadArray[vehicle.y - 1][vehicle.x] = null;
        return true;
      }

      if (prev.velocity < vehicle.x - prev.x - 1 || prev.x === 0) {
        if (vehicle.velocity < next.x - vehicle.x - 1 || next.x === this.length) {
          vehicle.y += 1;
          this.roadArray[vehicle.y - 1][vehicle.x] = null;
          return true;
        }
      }
    }
    return false;
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
        if (this.intersectionOut.id !== v.destinationId) {
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
