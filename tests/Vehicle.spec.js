import Vehicle from '../src/objects/Vehicle';

import { VEHICLE_TYPE } from '../src/consts/vehicles.const';

describe('Vehicle', () => {
  let vehicle;
  const SPEED_LIMIT = 10;

  beforeEach(() => {
    vehicle = new Vehicle(0, 0, 0, 1, VEHICLE_TYPE.CAR, 0, SPEED_LIMIT);
  });

  it('Calculates acceleration of the vehicle', () => {
    vehicle.accelerate();
    vehicle.accelerate();
    vehicle.accelerate();
    expect(vehicle.velocity).toEqual(3);
  });

  it('Calculates new position of the vehicle', () => {
    vehicle.accelerate();
    vehicle.move();
    expect(vehicle.x).toEqual(1);

    vehicle.accelerate();
    vehicle.move();
    expect(vehicle.x).toEqual(3);
  });

  it('Calculates velocity after brake', () => {
    vehicle.accelerate();
    vehicle.accelerate();
    vehicle.accelerate();
    vehicle.brake();
    expect(vehicle.velocity).toBeLessThanOrEqual(3);
  });

  it('Calculates if the velocity is lower than speed limit', () => {
    for (let i = 0; i < 20; i++) {
      vehicle.accelerate();
    }
    expect(vehicle.velocity).toBeLessThanOrEqual(SPEED_LIMIT);
  });
});
