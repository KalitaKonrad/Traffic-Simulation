import Vehicle from './Vehicle';
import { VEHICLE_TYPE } from '../consts/vehicles.const';

export default class Truck extends Vehicle {
  /**
   * Truck Object extending base Vehicle for Nagel-Schreckenberg model.
   *
   * @param {number} id
   * @param {number} x
   * @param {number} y
   * @param {number} destinationId
   * @param {number} velocity
   * @param {number} maxVelocity
   */
  constructor(id, x, y, destinationId, velocity, maxVelocity) {
    super(id, x, y, destinationId, VEHICLE_TYPE.TRUCK, velocity, maxVelocity);
  }
}
