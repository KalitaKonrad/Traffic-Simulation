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
road.addVehicle(new Car(0, 0, 0, 0));

const step = () => {
  road.update();
  console.log(road.toString());
  console.log('Vehicles count ', road.vehicles.length);
  document.querySelector('#sim-div').innerHTML = road.toString();
};

const addVehicle = () => {
  road.addVehicle(new Car(0, 0, 0, 0));
};

const addVehicleOnMiddle = () => {
  road.addVehicle(new Car(1, 50, 1, 0));
};

document.querySelector('#step-btn').addEventListener('click', ($event) => {
  step();
});

document.querySelector('#add-start').addEventListener('click', ($event) => {
  addVehicle();
  step();
});

document.querySelector('#add-mid').addEventListener('click', ($event) => {
  addVehicleOnMiddle();
  step();
});

document.querySelector('#lights').addEventListener('click', ($event) => {
  road.intersectionOut.lights == 1 ? (road.intersectionOut.lights = 2) : (road.intersectionOut.lights = 1);
  step();
});
