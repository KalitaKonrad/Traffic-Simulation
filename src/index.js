// import MainController from './controllers/MainController';
// import Simulation from './Simulation';

// const controller = new MainController(new Simulation());

// controller.start();

import Road from './objects/Road';
import Car from './objects/Car';
import Intersection from './objects/Intersection';

const road = new Road();
const intersection = new Intersection(1);

intersection.lights = 1;
road.setIntersection(intersection);
road.addVehicle(new Car(0,0,0,0));

for(let i=0; i<15; i++){
    if(i==10) {
        road.addVehicle(new Car(2,60,2,0));
    }
    road.update();
    console.log(road.toString());
    console.log("Vehicles count ", road.vehicles.length);
}

