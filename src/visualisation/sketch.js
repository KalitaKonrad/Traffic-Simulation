import { CONTROLLER } from '../index';
import { VEHICLE_COLOR } from '../consts/vehicles.const';

const canvas = document.getElementById('canvas');
const canvasSecond = document.getElementById('canvas-backward');
const ctx = canvas.getContext('2d');
const ctxSecond = canvasSecond.getContext('2d');
const sim = CONTROLLER.simulation;

const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const VEHICLE_SIZE_X = 14;
const VEHICLE_SIZE_Y = 14;
const DRAW_INTERVAL = 700;

/**
 * Clears whole canvas.
 */
const clearCanvas = (ctx) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

/**
 * Draws vehicles on the road.
 *
 * @param {Road} road - object representing road.
 */
const drawVehicles = (road, ctx, isForward) => {
  const xWidth = WIDTH / road.length;
  const yHeight = HEIGHT / road.width - 15;

  if (isForward) {
    road.vehicles.forEach((vehicle) => {
      ctx.fillStyle = VEHICLE_COLOR[vehicle.velocity];
      ctx.fillRect(xWidth * vehicle.x, yHeight * (vehicle.y + 1), VEHICLE_SIZE_X, VEHICLE_SIZE_Y);
    });
  } else {
    road.vehicles.forEach((vehicle) => {
      ctx.fillStyle = VEHICLE_COLOR[vehicle.velocity];
      ctx.fillRect(WIDTH - xWidth * vehicle.x, yHeight * (vehicle.y + 1), VEHICLE_SIZE_X, VEHICLE_SIZE_Y);
    });
  }
};

/**
 * Main visualisation function, forces redraw for given interval.
 *
 * @param {Road} road - object representing road.
 */
const visualize = () => {
  setInterval(sim.run.bind(sim), DRAW_INTERVAL);
  setInterval(() => {
    const roadForward = sim.roads.filter((road) => road.id === 2 * sim.selectedRoadId - 1)[0];
    const roadBackward = sim.roads.filter((road) => road.id === 2 * sim.selectedRoadId)[0];
    drawVehicles(roadForward, ctx, true);
    drawVehicles(roadBackward, ctxSecond, false);
  }, DRAW_INTERVAL);

  setTimeout(() => {
    setInterval(() => {
      clearCanvas(ctx);
      clearCanvas(ctxSecond);
      document.getElementById('amount-info').innerText = sim.numberOfVehiclesOnRoads();
      document.getElementById('avg-velo-info').innerText = Math.round(sim.averageVelocity() * 7.5 * 360) / 100;
      document.getElementById('avg-inflow').innerText = Math.round(sim.averageInflow() * 100) / 100;

      document.getElementById('road-amount').innerHTML = sim.getAmoutOfVehiclesOnRoad(CONTROLLER.CURRENT_ROAD);
      document.getElementById('road-avg').innerHTML =
        Math.round(sim.getAvgVelocityOnRoad(CONTROLLER.CURRENT_ROAD) * 7.5 * 360) / 100 || 0;
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
