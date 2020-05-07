import Road from './objects/Road';
import Car from './objects/Car';
import Intersection from './objects/Intersection';


export default class Simulation {
    constructor() {
        this.road = new Road();
        this.intersection = new Intersection(1);

        this.setUp();
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
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;
    }

    update() {
        this.road.update();
        console.log(this.road.toString());
        console.log("Vehicles count ", this.road.vehicles.length);
    }

    render() {
        this.clear();
        this.ctx.rect(20, 20, 150, 100);
        this.ctx.stroke();
      }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    loop() {
        this.update();
        this.update();
        this.road.addVehicle(new Car(0,0,0,0));
        for(let i=0; i< 20; i++){
            this.update();
            this.clear();
            this.render();
        }
    }
}