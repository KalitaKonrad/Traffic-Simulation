import Road from './objects/Road';
import Car from './objects/Car';
import Intersection from './objects/Intersection';

export default class Simulation {
  constructor(interval = 500) {
    this.interval = interval;

    this.vehicles = [];
    this.roads = [];
    this.intersections = [];

    this.setUp();
    window.requestAnimationFrame(this.loop.bind(this));
  }

  setUp() {
    this.canvas = document.querySelector('.js-canvas');
    this.ctx = this.canvas.getContext('2d');

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    window.addEventListener('resize', this.setUpCanvas.bind(this));
  }

  create() {
    const r1_1 = new Road(200, 3, 10, 1);
    const r1_2 = new Road(200, 3, 10, 2);

    const r2_1 = new Road(250, 3, 10, 3);
    const r2_2 = new Road(250, 3, 10, 4);

    this.intersections.push(new Intersection(1, r1_1, r2_2, r1_2, r2_1, 1.2, 'Rondo Ofiar Katynia', 0, 0));

    r1_1.setIntersection(this.intersections[0]);
    r2_2.setIntersection(this.intersections[0]);

    this.roads.push(r1_1, r1_2);
    this.roads.push(r2_1, r2_2);
  }

  generateNewCars() {
    this.intersections.forEach((intersection) => {
      intersection.vehicleGenerator += intersection.carsInput;
      while (intersection.vehicleGenerator >= 1) {
        intersection.vehicleGenerator--;
        let vehicle = new Car(
          this.vehicles.length + 1,
          0,
          0,
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 8)
        );
        this.vehicles.push(vehicle);
        this.intersections.addNewVehicle(vehicle);
      }
    });
  }

  update() {}

  draw() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 100, window.innerWidth, 100);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  run() {
    // setInterval(()=>{
    //   this.clear();
    //   this.draw();
    //   this.update();
    //   window.requestAnimationFrame(this.loop.bind(this));
    // }, this.interval);
  }
}
