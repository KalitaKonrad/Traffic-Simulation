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
const API_URL = `https://api.mapbox.com/styles/v1/kraa22123/cka8a10o20g3x1ip8bjmkis6r/tiles/256/{z}/{x}/{y}?access_token=${ACCESS_TOKEN}`;

L.tileLayer(API_URL, {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 19,
}).addTo(map);

main();
