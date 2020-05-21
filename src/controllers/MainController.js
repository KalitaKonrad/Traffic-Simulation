export default class MainController {
  constructor(simulation) {
    this.simulation = simulation;
    this.setUp();
  }
  setUp() {
    this.startBtn = document.getElementById('start-btn');
    this.stopBtn = document.getElementById('stop-btn');
    this.resetBtn = document.getElementById('reset-btn');
  }

  check() {
    if (this.simulation.start) {
      this.startBtn.style.backgroundColor = '#2a9d8f';
      this.stopBtn.style.backgroundColor = '#e63946';
    } else {
      this.startBtn.style.backgroundColor = '#2bcdbf';
      this.stopBtn.style.backgroundColor = '#ad3743';
    }
  }

  start() {
    this.simulation.start = true;
    this.check();
  }
  stop() {
    this.simulation.start = false;
    this.check();
  }

  reset() {
    this.simulation.start = false;
    this.simulation.roads = [];
    this.simulation.intersections = [];
    this.simulation.idCounter = 0;
    this.simulation.setUp();
    this.check();
  }

  changeIntersectionsInflow(value) {
    this.simulation.changeInflow(value / 100);
  }
}
