import Simulation from './objects/Simulation';

const simulation = new Simulation();
simulation.generateNewCars();

document.querySelector('#step-btn').addEventListener('click', ($event) => {
  simulation.run();
});
