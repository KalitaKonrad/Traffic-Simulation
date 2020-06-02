import { CONTROLLER } from '../index';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const sim = CONTROLLER.simulation;

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
const visualize = () => {
  setInterval(sim.run.bind(sim), DRAW_INTERVAL);
  setInterval(() => {
    const road = sim.roads[sim.selectedRoadId];
    drawVehicles(road);
  }, DRAW_INTERVAL);

  setTimeout(() => {
    setInterval(() => {
      clearCanvas();
      document.getElementById('amount-info').innerText = sim.numberOfVehiclesOnRoads();
      document.getElementById('avg-velo-info').innerText = Math.round(sim.averageVelocity() * 7.5 * 360) / 100;
      document.getElementById('avg-inflow').innerText = Math.round(sim.averageInflow() * 100) / 100;

      const drawChart = () => {
        let data = google.visualization.arrayToDataTable(sim.destinationStats());
        let options = {
          backgroundColor: 'transparent',
        };

        let chart = new google.visualization.PieChart(document.getElementById('plot'));

        chart.draw(data, options);
      };
      google.charts.load('current', { packages: ['corechart'] });
      google.charts.setOnLoadCallback(drawChart);
    }, DRAW_INTERVAL);
  }, DRAW_INTERVAL - 25);
};

visualize();
