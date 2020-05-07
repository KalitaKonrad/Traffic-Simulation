import MainController from './controllers/MainController';
import Simulation from './Simulation';

const controller = new MainController(new Simulation());

controller.start();
