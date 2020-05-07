import Vehicle from './Vehicle';
import { VEHICLE_TYPE } from '../consts/vehicles.const';

export default class Truck extends Vehicle {
  constructor(id, x, y, destinationId) {
    super(id, x, y, destinationId, VEHICLE_TYPE.TRUCK, 0, 8);
  }
}
