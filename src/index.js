import main from './visualisation/Map';

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

import Simulation from '../src/objects/Simulation';

const sim = new Simulation();
sim.run();
sim.run();
sim.run();
sim.run();
sim.run();
sim.run();
sim.run();
sim.run();
sim.run();
sim.run();
sim.run();
sim.run();
sim.run();
sim.run();
sim.run();
