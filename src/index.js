// import MainController from './controllers/MainController';
// import Simulation from './Simulation';

// const controller = new MainController(new Simulation());

// controller.start();

import Road from './objects/Road';
import Car from './objects/Car';
import Intersection from './objects/Intersection';
import main from './visualisation/Map';

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

///////////////////// Leaflet map - visualization /////////////////////

const CRACOW_LAT = 50.0647;
const CRACOW_LNG = 19.945;

export const map = L.map('map', {
  // doubleClickZoom: false,
  // closePopupOnClick: false,
  // dragging: false,
  // zoomSnap: false,
  // zoomDelta: false,
  // trackResize: false,
  // touchZoom: false,
  // scrollWheelZoom: false,
  // zoomControl: false,
}).setView([CRACOW_LAT, CRACOW_LNG], 12);

const ACCESS_TOKEN = 'pk.eyJ1Ijoia3JhYTIyMTIzIiwiYSI6ImNrYTB3dXdzeTE4d28zb2xpZzA1dm93eTAifQ.PuLB6Nq-pA2rjNMT0PZgVg';
const tileUrl = `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${ACCESS_TOKEN}`;

L.tileLayer(tileUrl, {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'your.mapbox.access.token',
}).addTo(map);

main();
