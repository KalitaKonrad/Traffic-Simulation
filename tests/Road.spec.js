import Road from '../src/objects/Road';
import Car from '../src/objects/Car';
import Intersection from '../src/objects/Intersection';

import { INTERSECTION_TYPES } from '../src/consts/intersections.const';

describe('Vehicle', () => {
  let road;
  let intersection;

  const addVehicle = () => {
    road.putVehicle(new Car(0, 0, 0, 1, Math.floor(Math.random() * 5)));
  };

  beforeEach(() => {
    road = new Road(100, 3, 10, 1);
    intersection = new Intersection(
      1,
      road,
      new Road(),
      new Road(),
      new Road(),
      3,
      'Intersection',
      INTERSECTION_TYPES.ROUNDABOUT,
      0
    );
    road.setIntersection(intersection);
  });

  it('Calculates number of vehicles on the road', () => {
    addVehicle();
    addVehicle();

    expect(road.vehicles.length).toEqual(2);
  });

  it('Calculates number of vehicle on the road after updates', () => {
    for (let i = 0; i < 20; i++) {
      addVehicle();
      road.update();
    }
    expect(road.vehicles.length).toBeLessThan(20);
  });
});
