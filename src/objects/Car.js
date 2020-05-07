import Vehicle from './Vehicle';
import { VEHICLE_TYPE } from '../consts/vehicles.const';

export default class Car extends Vehicle {
  /**
   * Car Object extending base Vehicle for Nagel-Schreckenberg model.
   *
   * @param {int} id
   * @param {int} x
   * @param {int} y
   * @param {int} destinationId
   */
  constructor(id, x, y, destinationId) {
    super(id, x, y, destinationId, VEHICLE_TYPE.CAR, 0, 10);
  }
}
