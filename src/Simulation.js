import Road from './objects/Road';
import Car from './objects/Car';
import Intersection from './objects/Intersection';


export default class Simulation {
    constructor() {
        this.road = new Road();
        this.intersection = new Intersection(1);

        this.interval = 500;

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
    }

    draw() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 100, window.innerWidth, 100);

        this.ctx.fillStyle = "#FF0000";
        this.road.vehicles.forEach(vehicle => {
          this.ctx.fillRect(vehicle.x, 100, 100, 50);
        })
      }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    loop() {
      for(let i=0; i<20; i++){
        this.update();
      }
        
      // setInterval(()=>{
      //   this.clear();
      //   this.draw();
      //   this.update();
      
      //   window.requestAnimationFrame(this.loop.bind(this));
      // }, this.interval);
    }

}