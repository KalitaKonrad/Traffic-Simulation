// import MainController from './controllers/MainController';
// import Simulation from './Simulation';

// const controller = new MainController(new Simulation());

// controller.start();

import Road from './objects/Road';
import Car from './objects/Car';
import Intersection from './objects/Intersection';

const road = new Road();
const outRoad = new Road();
const intersection = new Intersection(1, road, new Road(), outRoad, new Road(), 1.2, 'Ofiar Katynia', 0, 0);
const intersection1 = new Intersection(1, outRoad, new Road(), new Road(), new Road(), 1.2, 'Droga', 0, 0);

intersection.lights = 1;
intersection1.lights = 1;

road.setIntersection(intersection);
outRoad.setIntersection(intersection1);

road.addVehicle(new Car(0, 0, 0, 0));

const step = () => {
  road.update();
  outRoad.update();

  road.intersectionOut.update();
  // console.log(road.toString());
  console.log('Vehicles count ', road.vehicles.length);
  console.log(road.intersectionOut.toString());
  document.querySelector('#sim-div').innerHTML = road.toString();
  document.querySelector('#sim-div').innerHTML += outRoad.toString();
};

const addVehicle = () => {
  road.addVehicle(new Car(0, 0, 0, 0, 0));
};

const addVehicleOnMiddle = () => {
  road.addVehicle(new Car(1, 50, 1, 0, 0));
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

const lightsBtn = document.querySelector('#lights');

lightsBtn.addEventListener('click', ($event) => {
  road.intersectionOut.lights == 1 ? (road.intersectionOut.lights = 2) : (road.intersectionOut.lights = 1);
  step();
  if (lightsBtn.classList.contains('btn-danger')) {
    lightsBtn.classList.replace('btn-danger', 'btn-success');
  } else {
    lightsBtn.classList.replace('btn-success', 'btn-danger');
  }
});
