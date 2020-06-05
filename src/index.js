import MainController from './controllers/MainController';
import Simulation from './objects/Simulation';
///////////////////// Leaflet map - visualization /////////////////////

const CRACOW_LAT = 50.0647;
const CRACOW_LNG = 19.945;
export const GREEN = 'rgb(0, 255, 0)';
export const RED = 'rgb(255, 0, 0)';

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
const API_URL = `https://api.mapbox.com/styles/v1/kraa22123/cka8a10o20g3x1ip8bjmkis6r/tiles/256/{z}/{x}/{y}?access_token=${ACCESS_TOKEN}`;

L.tileLayer(API_URL, {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 19,
}).addTo(map);

export const CONTROLLER = new MainController(new Simulation());

import('./visualisation/sketch').then((module) => {});
import('./visualisation/Map').then((module) => module.default());

CONTROLLER.startBtn.addEventListener('click', () => {
  CONTROLLER.start();
});

CONTROLLER.stopBtn.addEventListener('click', () => {
  CONTROLLER.stop();
});

CONTROLLER.resetBtn.addEventListener('click', () => {
  CONTROLLER.reset();
});

for (let i = 1; i <= 16; i++) {
  let slider = document.getElementById(`slider${i}`);
  let output = document.getElementById(`slider${i}-output`);
  slider.oninput = function () {
    output.innerHTML = this.value / 100;
    CONTROLLER.changeIntersectionInflow(i, this.value);
  };
}

const addEventListenersToLights = () => {
  const upperLight = document.getElementById('upper-light');
  const lowerLight = document.getElementById('lower-light');

  upperLight.style.backgroundColor = GREEN;
  lowerLight.style.backgroundColor = GREEN;

  const leftIntersection = document.getElementById('dest-forward-left');
  const rightIntersection = document.getElementById('dest-forward-right');
  const sim = CONTROLLER.simulation;

  upperLight.addEventListener('click', (e) => changeLight(e, sim, leftIntersection.innerText));
  lowerLight.addEventListener('click', (e) => changeLight(e, sim, rightIntersection.innerText));
};

const changeLight = function (event, sim, intersectionName) {
  const selectedIntersection = sim.intersections.filter((intersection) => intersection.name === intersectionName)[0];

  console.log(selectedIntersection);
  switch (event.target.style.backgroundColor) {
    case RED:
      event.target.style.backgroundColor = GREEN;

      selectedIntersection.userChangedLight = true;
      console.log(`set ${selectedIntersection.name} to light: ${selectedIntersection.lights}`);
      selectedIntersection.lights = 2;
      break;

    case GREEN:
      event.target.style.backgroundColor = RED;
      console.log(`set ${selectedIntersection.name} to light: ${selectedIntersection.lights}`);
      selectedIntersection.userChangedLight = true;
      selectedIntersection.lights = 1;
  }
};

addEventListenersToLights();
