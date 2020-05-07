import Simulation from '../Simulation';

export default class MainController {
  constructor(simulation) {
    this.simulation = simulation;
  }

  setUp() {}

  start() {
    this.simulation.loop();
  }
}
