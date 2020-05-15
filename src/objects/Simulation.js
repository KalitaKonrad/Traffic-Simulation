import Road from './Road';
import Car from './Car';
import Truck from './Truck';
import Intersection from './Intersection';

import { NUM_OF_INTERSECTIONS } from '../consts/simulation.const';

export default class Simulation {
  /**
   * Simulation class used for managing traffic in Nagel-Schreckenberg model.
   *
   * @param  {int} interval = 500
   *
   */
  constructor(interval = 500) {
    this.interval = interval;

    this.vehicles = [];
    this.roads = [];
    this.intersections = [];

    this.setUp();
  }

  /**
   * Method used for setting up model, creating roads and intersections
   *
   * @return void
   */
  setUp() {
    const r1_1 = new Road(290, 3, 10, 1);
    const r1_2 = new Road(290, 3, 10, 2);

    const r2_1 = new Road(215, 3, 10, 3);
    const r2_2 = new Road(215, 3, 10, 4);

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

    const intersection1 = new Intersection(1, r1_1, r2_2, r1_2, r2_1, 1.2, 'Mistrzejowice', 1, 10);
    this.intersections.push(intersection1);
    r1_1.setIntersection(intersection1);
    r2_2.setIntersection(intersection1);

    const intersection2 = new Intersection(2, r2_1, r3_2, r2_2, r3_1, 1.2, 'Czyzyny', 1, 10);
    this.intersections.push(intersection2);
    r2_1.setIntersection(intersection2);
    r3_2.setIntersection(intersection2);

    const intersection3 = new Intersection(3, r3_1, r4_2, r3_2, r4_1, 1.2, 'Dywizjonu 308', 0, 10);
    this.intersections.push(intersection3);
    r3_1.setIntersection(intersection3);
    r4_2.setIntersection(intersection3);

    const intersection4 = new Intersection(4, r4_1, r5_2, r4_2, r5_1, 1.2, 'Leg', 1, 10);
    this.intersections.push(intersection4);
    r4_1.setIntersection(intersection4);
    r5_2.setIntersection(intersection4);

    const intersection5 = new Intersection(5, r5_1, r6_2, r5_2, r6_1, 1.2, 'Plaszow', 1, 10);
    this.intersections.push(intersection5);
    r5_1.setIntersection(intersection5);
    r6_2.setIntersection(intersection5);

    const intersection6 = new Intersection(6, r6_1, r7_2, r6_2, r7_1, 1.2, 'Bagry', 1, 10);
    this.intersections.push(intersection6);
    r6_1.setIntersection(intersection6);
    r7_2.setIntersection(intersection6);

    const intersection7 = new Intersection(7, r7_1, r8_2, r7_2, r8_1, 1.2, 'Kabel', 1, 10);
    this.intersections.push(intersection7);
    r7_1.setIntersection(intersection7);
    r8_2.setIntersection(intersection7);

    const intersection8 = new Intersection(8, r8_1, r9_2, r8_2, r9_1, 1.2, 'Lagiewniki', 1, 10);
    this.intersections.push(intersection8);
    r8_1.setIntersection(intersection8);
    r9_2.setIntersection(intersection8);

    const intersection9 = new Intersection(9, r9_1, r10_2, r9_2, r10_1, 1.2, 'Solvay', 1, 10);
    this.intersections.push(intersection9);
    r9_1.setIntersection(intersection9);
    r10_2.setIntersection(intersection9);

    const intersection10 = new Intersection(10, r10_1, r11_2, r10_2, r11_1, 1.2, 'Ruczaj', 1, 10);
    this.intersections.push(intersection10);
    r10_1.setIntersection(intersection10);
    r11_2.setIntersection(intersection10);

    const intersection11 = new Intersection(11, r11_1, r12_2, r11_2, r12_1, 1.2, 'Przegorzaly', 1, 10);
    this.intersections.push(intersection11);
    r11_1.setIntersection(intersection11);
    r12_2.setIntersection(intersection11);

    const intersection12 = new Intersection(12, r12_1, r13_2, r12_2, r13_1, 1.2, 'Zarzecze', 1, 10);
    this.intersections.push(intersection12);
    r12_1.setIntersection(intersection12);
    r13_2.setIntersection(intersection12);

    const intersection13 = new Intersection(13, r13_1, r14_2, r13_2, r14_1, 1.2, 'Ofiar Katynia', 0, 10);
    this.intersections.push(intersection13);
    r13_1.setIntersection(intersection13);
    r14_2.setIntersection(intersection13);

    const intersection14 = new Intersection(14, r14_1, r15_2, r14_2, r15_1, 1.2, 'Wolbromski', 1, 10);
    this.intersections.push(intersection14);
    r14_1.setIntersection(intersection14);
    r15_2.setIntersection(intersection14);

    const intersection15 = new Intersection(15, r15_1, r16_2, r15_2, r16_1, 1.2, 'Imbramowski', 1, 10);
    this.intersections.push(intersection15);
    r15_1.setIntersection(intersection15);
    r16_2.setIntersection(intersection15);

    const intersection16 = new Intersection(16, r16_1, r1_2, r16_2, r1_1, 1.2, 'Polsadu', 0, 10);
    this.intersections.push(intersection16);
    r15_1.setIntersection(intersection16);
    r16_2.setIntersection(intersection16);

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
    this.roads.push(r16_1, r15_2);
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
        let id = this.vehicles.length + 1;

        if (Math.random() < 0.75) {
          let vehicle = new Car(id, 0, 0, destinationId, velocity);
        } else {
          let vehicle = new Truck(id, 0, 0, destinationId, velocity);
        }
        this.vehicles.push(vehicle);
        intersection.addNewVehicle(vehicle);
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
      console.log(road.intersectionOut.description);
      console.log(road.toString());
    });
  }

  run() {
    this.update();
    this.draw();
  }
}
