import { VEHICLE_TYPE } from '../consts/vehicles.const';

export default class Vehicle {
  /**
   * Base Vehicle class for simulating Nagel-Schreckenberg model.
   *
   *
   * @param {int} id                             Vehicle identifier
   *
   * @param {int} x                              This is a current Vehicle position in x-axis
   * @param {int} y                              Current road lane of the road occupied by the Vehicle
   *
   * @param {int} destinationId
   * @param {VEHICLE_TYPE} type                           Vehicle type from VEHICLE_TYPE const
   * @param {int} velocity                       Current velocity of the Vehicle
   * @param {int} maxVelocity                    Constant speed limit for the Vehicle
   *
   * @param {float} slowProbability                is the Probability iof breaking  by the Vehicle, default value is 0.05
   *
   */
  constructor(id, x, y, destinationId, type, velocity, maxVelocity) {
    this.id = id;

    this.x = x;
    this.y = y;

    this.destinationId = destinationId;
    this.type = type;
    this.velocity = velocity;
    this.maxVelocity = maxVelocity;

    this.slowProbability = 0.05;
  }

  /**
   * Method used for calculating acceleration of the Vehicle.
   *
   * @return void
   */
  accelerate() {
    if (this.velocity + 1 >= this.maxVelocity) {
      this.velocity = this.maxVelocity;
    } else {
      this.velocity += 1;
    }
  }

  /**
   * Method used for calculating probability of deceleration of the Vehicle.
   *
   * @return void
   */
  brake() {
    if (this.slowProbability > Math.random()) {
      this.velocity -= 1;
    }
  }

  /**
   * Method wrapper used for calculating acceleration and deceleraation of the Vehicle.
   *
   * @return void
   */
  changeVelocity() {
    this.accelerate();
    this.brake();
  }

  /**
   * Method is used for updating Vehicle's velocity and position.
   *
   * @return void
   */
  move() {
    this.x += this.velocity;
  }

  /**
   * Method is used for comparing Vehicle objects.
   * @param {Vehicle} x
   *
   * @return {Boolean}
   */
  equals(x) {
    return this === x;
  }
}
