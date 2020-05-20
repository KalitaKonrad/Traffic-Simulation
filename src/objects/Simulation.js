import Road from './Road';
import Car from './Car';
import Truck from './Truck';
import Intersection from './Intersection';

import { NUM_OF_INTERSECTIONS } from '../consts/simulation.const';
import { INTERSECTION_TYPES } from '../consts/intersections.const';

export default class Simulation {
  /**
   * Simulation class used for managing traffic in Nagel-Schreckenberg model.
   *
   * @property {Array<Road>} roads                  - Array of all the roads in current simulation.
   * @property {Array<Intersection>} intersections  - Array of all the intersections in currenct simulations.
   * @property {number} idCounter                   - Counter used to assign id for new vehicles.
   */
  constructor() {
    this.roads = [];
    this.intersections = [];
    this.idCounter = 0;
    this.start = true;

    this.setUp();
  }

  /**
   * Method used for setting up model, creating roads and intersections
   *
   * @return void
   */
  setUp() {
    // const r1_1 = new Road(100, 3, 10, 1);
    // const r1_2 = new Road(100, 3, 10, 2);
    //
    // const r2_1 = new Road(100, 3, 10, 3);
    // const r2_2 = new Road(100, 3, 10, 4);
    //
    // const intersectionA = new Intersection(1, 0, 0, r1_1, r2_2, r1_2, r2_1, 1.2, 'A', INTERSECTION_TYPES.RED_LIGHT, 10);
    // const intersectionB = new Intersection(2, 1, 1, r2_1, r1_2, r2_2, r1_1, 1.2, 'B', INTERSECTION_TYPES.RED_LIGHT, 10);
    //
    // r1_1.setIntersection(intersectionA);
    // r2_2.setIntersection(intersectionA);
    //
    // r2_1.setIntersection(intersectionB);
    // r1_2.setIntersection(intersectionB);
    //
    // this.intersections.push(intersectionA);
    // this.intersections.push(intersectionB);
    //
    // this.roads.push(r1_1);
    // this.roads.push(r1_2);
    // this.roads.push(r2_1);
    // this.roads.push(r2_2);

    const r1_1 = new Road(290, 3, 10, 1);
    const r1_2 = new Road(290, 3, 10, 2);

    const r2_1 = new Road(235, 3, 10, 3);
    const r2_2 = new Road(235, 3, 10, 4);

    const r3_1 = new Road(105, 3, 10, 3);
    const r3_2 = new Road(105, 3, 10, 4);

    const r4_1 = new Road(200, 3, 10, 3);
    const r4_2 = new Road(200, 3, 10, 4);

    const r5_1 = new Road(100, 3, 10, 3);
    const r5_2 = new Road(100, 3, 10, 4);

    const r6_1 = new Road(160, 3, 10, 3);
    const r6_2 = new Road(160, 3, 10, 4);

    const r7_1 = new Road(100, 3, 10, 3);
    const r7_2 = new Road(100, 3, 10, 4);

    const r8_1 = new Road(420, 3, 10, 3);
    const r8_2 = new Road(420, 3, 10, 4);

    const r9_1 = new Road(155, 3, 10, 3);
    const r9_2 = new Road(155, 3, 10, 4);

    const r10_1 = new Road(230, 3, 10, 3);
    const r10_2 = new Road(230, 3, 10, 4);

    const r11_1 = new Road(300, 3, 10, 3);
    const r11_2 = new Road(300, 3, 10, 4);

    const r12_1 = new Road(370, 3, 10, 3);
    const r12_2 = new Road(370, 3, 10, 4);

    const r13_1 = new Road(180, 3, 10, 3);
    const r13_2 = new Road(180, 3, 10, 4);

    const r14_1 = new Road(420, 3, 10, 3);
    const r14_2 = new Road(420, 3, 10, 4);

    const r15_1 = new Road(200, 3, 10, 3);
    const r15_2 = new Road(200, 3, 10, 4);

    const r16_1 = new Road(250, 3, 10, 3);
    const r16_2 = new Road(250, 3, 10, 4);

    const intersection1 = new Intersection(
      1,
      50.0877,
      20.0013,
      r1_1,
      r2_2,
      r1_2,
      r2_1,
      1.2,
      'Mistrzejowice',
      INTERSECTION_TYPES.RED_LIGHT,
      10
    );
    this.intersections.push(intersection1);
    r1_1.setIntersection(intersection1);
    r2_2.setIntersection(intersection1);

    const intersection2 = new Intersection(
      2,
      50.0742,
      20.0035,
      r2_1,
      r3_2,
      r2_2,
      r3_1,
      1.2,
      'Czyzyny',
      INTERSECTION_TYPES.RED_LIGHT,
      10
    );
    this.intersections.push(intersection2);
    r2_1.setIntersection(intersection2);
    r3_2.setIntersection(intersection2);

    const intersection3 = new Intersection(
      3,
      50.067,
      20.0043,
      r3_1,
      r4_2,
      r3_2,
      r4_1,
      1.2,
      'Dywizjonu 308',
      INTERSECTION_TYPES.ROUNDABOUT,
      10
    );
    this.intersections.push(intersection3);
    r3_1.setIntersection(intersection3);
    r4_2.setIntersection(intersection3);

    const intersection4 = new Intersection(
      4,
      50.0571,
      20.0017,
      r4_1,
      r5_2,
      r4_2,
      r5_1,
      1.2,
      'Leg',
      INTERSECTION_TYPES.RED_LIGHT,
      10
    );
    this.intersections.push(intersection4);
    r4_1.setIntersection(intersection4);
    r5_2.setIntersection(intersection4);

    const intersection5 = new Intersection(
      5,
      50.0397,
      20.0009,
      r5_1,
      r6_2,
      r5_2,
      r6_1,
      1.2,
      'Plaszow',
      INTERSECTION_TYPES.RED_LIGHT,
      10
    );
    this.intersections.push(intersection5);
    r5_1.setIntersection(intersection5);
    r6_2.setIntersection(intersection5);

    const intersection6 = new Intersection(
      6,
      50.0408,
      19.9831,
      r6_1,
      r7_2,
      r6_2,
      r7_1,
      1.2,
      'Bagry',
      INTERSECTION_TYPES.RED_LIGHT,
      10
    );
    this.intersections.push(intersection6);
    r6_1.setIntersection(intersection6);
    r7_2.setIntersection(intersection6);

    const intersection7 = new Intersection(
      7,
      50.0171,
      19.9771,
      r7_1,
      r8_2,
      r7_2,
      r8_1,
      1.2,
      'Kabel',
      INTERSECTION_TYPES.RED_LIGHT,
      10
    );
    this.intersections.push(intersection7);
    r7_1.setIntersection(intersection7);
    r8_2.setIntersection(intersection7);

    const intersection8 = new Intersection(
      8,
      50.0147,
      19.9454,
      r8_1,
      r9_2,
      r8_2,
      r9_1,
      1.2,
      'Lagiewniki',
      INTERSECTION_TYPES.RED_LIGHT,
      10
    );
    this.intersections.push(intersection8);
    r8_1.setIntersection(intersection8);
    r9_2.setIntersection(intersection8);

    const intersection9 = new Intersection(
      9,
      50.0211,
      19.9326,
      r9_1,
      r10_2,
      r9_2,
      r10_1,
      1.2,
      'Solvay',
      INTERSECTION_TYPES.RED_LIGHT,
      10
    );
    this.intersections.push(intersection9);
    r9_1.setIntersection(intersection9);
    r10_2.setIntersection(intersection9);

    const intersection10 = new Intersection(
      10,
      50.0299,
      19.9129,
      r10_1,
      r11_2,
      r10_2,
      r11_1,
      1.2,
      'Ruczaj',
      INTERSECTION_TYPES.RED_LIGHT,
      10
    );
    this.intersections.push(intersection10);
    r10_1.setIntersection(intersection10);
    r11_2.setIntersection(intersection10);

    const intersection11 = new Intersection(
      11,
      50.0485,
      19.8997,
      r11_1,
      r12_2,
      r11_2,
      r12_1,
      1.2,
      'Przegorzaly',
      INTERSECTION_TYPES.RED_LIGHT,
      10
    );
    this.intersections.push(intersection11);
    r11_1.setIntersection(intersection11);
    r12_2.setIntersection(intersection11);

    const intersection12 = new Intersection(
      12,
      50.0726,
      19.889,
      r12_1,
      r13_2,
      r12_2,
      r13_1,
      1.2,
      'Zarzecze',
      INTERSECTION_TYPES.RED_LIGHT,
      10
    );
    this.intersections.push(intersection12);
    r12_1.setIntersection(intersection12);
    r13_2.setIntersection(intersection12);

    const intersection13 = new Intersection(
      13,
      50.0874,
      19.8916,
      r13_1,
      r14_2,
      r13_2,
      r14_1,
      1.2,
      'Ofiar Katynia',
      INTERSECTION_TYPES.ROUNDABOUT,
      10
    );
    this.intersections.push(intersection13);
    r13_1.setIntersection(intersection13);
    r14_2.setIntersection(intersection13);

    const intersection14 = new Intersection(
      14,
      50.0918,
      19.9354,
      r14_1,
      r15_2,
      r14_2,
      r15_1,
      1.2,
      'Wolbromski',
      INTERSECTION_TYPES.RED_LIGHT,
      10
    );
    this.intersections.push(intersection14);
    r14_1.setIntersection(intersection14);
    r15_2.setIntersection(intersection14);

    const intersection15 = new Intersection(
      15,
      50.0861,
      19.9546,
      r15_1,
      r16_2,
      r15_2,
      r16_1,
      1.2,
      'Imbramowski',
      INTERSECTION_TYPES.RED_LIGHT,
      10
    );
    this.intersections.push(intersection15);
    r15_1.setIntersection(intersection15);
    r16_2.setIntersection(intersection15);

    const intersection16 = new Intersection(
      16,
      50.0851,
      19.9708,
      r16_1,
      r1_2,
      r16_2,
      r1_1,
      1.2,
      'Polsadu',
      INTERSECTION_TYPES.RED_LIGHT,
      10
    );
    this.intersections.push(intersection16);
    r1_2.setIntersection(intersection16);
    r16_1.setIntersection(intersection16);

    this.roads.push(r1_1, r1_2);
    this.roads.push(r2_1, r2_2);
    this.roads.push(r3_1, r3_2);
    this.roads.push(r4_1, r4_2);
    this.roads.push(r5_1, r5_2);
    this.roads.push(r6_1, r6_2);
    this.roads.push(r7_1, r7_2);
    this.roads.push(r8_1, r8_2);
    this.roads.push(r9_1, r9_2);
    this.roads.push(r10_1, r10_2);
    this.roads.push(r11_1, r11_2);
    this.roads.push(r12_1, r12_2);
    this.roads.push(r13_1, r13_2);
    this.roads.push(r14_1, r14_2);
    this.roads.push(r15_1, r15_2);
    this.roads.push(r16_1, r16_2);
  }

  /**
   * Method used for generating vehicles; cars or trucks
   *
   * @return void
   */
  inflowVehicles() {
    this.intersections.forEach((intersection) => {
      intersection.inflowCoefficient += intersection.carsInput;
      while (intersection.inflowCoefficient >= 1) {
        let destinationId = Math.floor(Math.random() * NUM_OF_INTERSECTIONS);
        let velocity = Math.floor(Math.random() * 8);
        let id = this.idCounter++;

        if (Math.random() < 0.75) {
          let vehicle = new Car(id, 0, 0, destinationId, velocity);
          intersection.addNewVehicle(vehicle);
        } else {
          let vehicle = new Truck(id, 0, 0, destinationId, velocity);
          intersection.addNewVehicle(vehicle);
        }
        intersection.inflowCoefficient--;
      }
    });
  }

  /**
   * Method used for updating whole simulation status, calling update of forads and intersections
   *
   * @return void
   */
  update() {
    this.roads.forEach((road) => road.update());
    this.inflowVehicles();
    this.intersections.forEach((intersection) => intersection.update());
  }

  /**
   * Method used for generating string for Simulation
   *
   * @return void
   */
  draw() {
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
    this.roads.forEach((road) => {
      console.log(road.intersectionOut.name);
      console.log(road.toString());
    });
  }

  run() {
    document.getElementById('start-btn').addEventListener('click', () => {
      this.start = true;
    });
    document.getElementById('stop-btn').addEventListener('click', () => {
      this.start = false;
    });
    if (this.start) {
      this.update();
    }
    // this.draw();
  }

  /**
   * Method used to calculate total number of vehicles on roads.
   *
   * @returns {number}
   */
  numberOfVehiclesOnRoads() {
    return this.roads.map((road) => road.vehicles.length).reduce((a, b) => a + b);
  }

  /**
   * Method used to calculate average velocity of vehicles on roads.
   *
   * @returns {number}
   */
  averageVelocity() {
    let result = 0;
    this.roads.forEach((road) => {
      road.vehicles.forEach((vehicle) => (result += vehicle.velocity));
    });
    return result / this.numberOfVehiclesOnRoads();
  }

  /**
   * Methods used to get statistics about destination points.
   *
   * @returns {{IntersectionId: count}}
   */
  destinationStats() {
    let results = {};
    this.roads.forEach((road) => {
      road.vehicles.forEach((vehicle) => {
        let destination = vehicle.destinationId;
        if (results[destination]) results[destination] += 1;
        else results[destination] = 1;
      });
    });
    return results;
  }
}
