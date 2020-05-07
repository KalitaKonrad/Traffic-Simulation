import Road from './objects/Road';
import Vehicle from './objects/Vehicle';
import Intersection from './objects/Intersection';


const road = new Road();
const intersection = new Intersection(1);

intersection.lights = 1;
road.setIntersection(intersection);


road.addVehicle(new Vehicle(0,0,0));

road.update();
console.log(road.toString());
console.log("Vehicles count ", road.vehicles.length);

road.update();
console.log(road.toString());
console.log("Vehicles count ", road.vehicles.length);

road.update();
console.log(road.toString());
console.log("Vehicles count ", road.vehicles.length);

road.update();
console.log(road.toString());
console.log("Vehicles count ", road.vehicles.length);

road.update();
console.log(road.toString());
console.log("Vehicles count ", road.vehicles.length);

road.update();
console.log(road.toString());
console.log("Vehicles count ", road.vehicles.length);

road.update();
console.log(road.toString());
console.log("Vehicles count ", road.vehicles.length);

road.update();
console.log(road.toString());
console.log("Vehicles count ", road.vehicles.length);
road.update();
console.log(road.toString());
console.log("Vehicles count ", road.vehicles.length);

road.update();
console.log(road.toString());
console.log("Vehicles count ", road.vehicles.length);

road.update();
console.log(road.toString());
console.log("Vehicles count ", road.vehicles.length);

road.update();
console.log(road.toString());
console.log("Vehicles count ", road.vehicles.length);
road.update();
console.log(road.toString());
console.log("Vehicles count ", road.vehicles.length);

road.update();
console.log(road.toString());
console.log("Vehicles count ", road.vehicles.length);

road.update();
console.log(road.toString());
console.log("Vehicles count ", road.vehicles.length);

road.update();
console.log(road.toString());
console.log("Vehicles count ", road.vehicles.length);
