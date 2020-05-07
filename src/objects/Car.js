import Vehicle from './Vehicle';
import { VEHICLE_TYPE } from '../consts/vehicles.const';

export default class Car extends Vehicle {
  constructor(id, x, y, destinationId) {
    super(id, x, y, destinationId, VEHICLE_TYPE.CAR, 0, 10);
  }
}
