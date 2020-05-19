import Simulation from '../objects/Simulation';
import { selectedRoadIndex, onEdgeClick } from './Events';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const sim = new Simulation();

const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const VEHICLE_SIZE_X = 15;
const VEHICLE_SIZE_Y = 15;
const DRAW_INTERVAL = 700;
ctx.fillStyle = 'red';

/**
 * Clears whole canvas.
 */
const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

/**
 * Draws vehicles on the road.
 *
 * @param {Road} road - object representing road.
 */
const drawVehicles = (road) => {
  const xWidth = WIDTH / road.length;
  const yHeight = HEIGHT / road.width - 15;

  road.vehicles.forEach((vehicle) => {
    ctx.fillRect(xWidth * vehicle.x, yHeight * (vehicle.y + 1), VEHICLE_SIZE_X, VEHICLE_SIZE_Y);
  });
};

/**
 * Main visualisation function, forces redraw for given interval.
 *
 * @param {Road} road - object representing road.
 */
const visualize = (road) => {
  setInterval(sim.run.bind(sim), DRAW_INTERVAL);
  setInterval(() => drawVehicles(road), DRAW_INTERVAL);

  setTimeout(() => {
    setInterval(() => clearCanvas(), DRAW_INTERVAL);
  }, DRAW_INTERVAL - 25);
};

visualize(sim.roads[selectedRoadIndex]);
