import Road from './objects/Road';
import Car from './objects/Car';
import Intersection from './objects/Intersection';


export default class Simulation {
    constructor() {
        this.road = new Road();
        this.intersection = new Intersection(1);
        this.x = 0;

        this.setUp();
        window.requestAnimationFrame(this.loop.bind(this));
    }

    setUp() {
        this.intersection.lights = 1;
        this.road.setIntersection(this.intersection);
        this.road.addVehicle(new Car(0,0,0,0));

        this.canvas = document.querySelector('.js-canvas');
        this.ctx = this.canvas.getContext('2d');

        this.setUpCanvas();
        window.addEventListener('resize', this.setUpCanvas.bind(this));
    }

    setUpCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    update() {
        this.road.update();
        console.log(this.road.toString());
        console.log("Vehicles count ", this.road.vehicles.length);
        this.x += 1;
    }

    draw() {
        this.ctx.fillRect(this.x, 100, 100, 100);
      }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    loop() {
        this.clear();
        this.draw();
        this.update();

        window.requestAnimationFrame(this.loop.bind(this));
    }
}