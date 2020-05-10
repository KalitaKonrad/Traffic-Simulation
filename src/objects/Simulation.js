import Road from './Road';
import Car from './Car';
import Intersection from './Intersection';

export default class Simulation {
  constructor(interval = 500) {
    this.interval = interval;

    this.vehicles = [];
    this.roads = [];
    this.intersections = [];

    this.setUp();
    this.create();
    // window.requestAnimationFrame(this.loop.bind(this));
  }

  setUp() {
    //   this.canvas = document.querySelector('.js-canvas');
    //   this.ctx = this.canvas.getContext('2d');
    //   this.canvas.width = window.innerWidth;
    //   this.canvas.height = window.innerHeight;
    //   window.addEventListener('resize', this.setUpCanvas.bind(this));
  }

  create() {
    const r1_1 = new Road(100, 3, 10, 1);
    const r1_2 = new Road(100, 3, 10, 2);

    const r2_1 = new Road(100, 3, 10, 3);
    const r2_2 = new Road(100, 3, 10, 4);

    const intersection1 = new Intersection(1, r1_1, r2_2, r1_2, r2_1, 1.2, 'Rondo Ofiar Katynia', 0, 10);
    const intersection2 = new Intersection(2, r1_2, r2_1, r1_1, r2_2, 1.2, 'Przybyszewskiego', 1, 10);

    this.intersections.push(intersection1);
    this.intersections.push(intersection2);

    r1_1.setIntersection(intersection1);
    r2_2.setIntersection(intersection1);

    r1_2.setIntersection(intersection2);
    r2_1.setIntersection(intersection2);

    this.roads.push(r1_1, r1_2);
    this.roads.push(r2_1, r2_2);
  }

  generateNewCars() {
    this.intersections.forEach((intersection) => {
      intersection.vehicleGenerator += intersection.carsInput;
      while (intersection.vehicleGenerator >= 1) {
        intersection.vehicleGenerator--;
        let destinationId = Math.floor(Math.random() * 3);
        let vehicle = new Car(this.vehicles.length + 1, 0, 0, destinationId, Math.floor(Math.random() * 8));
        this.vehicles.push(vehicle);
        intersection.addNewVehicle(vehicle);
      }
    });
  }

  update() {
    this.roads.forEach((road) => road.update());
    this.generateNewCars();
    this.intersections.forEach((intersection) => intersection.update());
  }

  draw() {
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
    this.roads.forEach((road) => {
      console.log(road.intersectionOut.description);
      console.log(road.toString());
    });
    // this.ctx.fillStyle = 'black';
    // this.ctx.fillRect(0, 100, window.innerWidth, 100);
  }

  clear() {
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  run() {
    this.update();
    this.draw();
    // setInterval(()=>{
    // this.clear();
    // this.draw();
    // this.update();
    // window.requestAnimationFrame(this.loop.bind(this));
    // }, this.interval);
  }
}
