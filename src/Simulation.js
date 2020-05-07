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
    }

    update() {
        this.road.update();
        console.log(this.road.toString());
        console.log("Vehicles count ", this.road.vehicles.length);
    }

    loop() {
        this.update();
        this.update();
        this.road.addVehicle(new Car(0,0,0,0));
        for(let i=0; i< 20; i++){
            this.update();
        }
    }
}