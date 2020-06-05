import Vehicle from './Vehicle';
import { INTERSECTION_TYPES } from '../consts/intersections.const';

export default class Intersection {
  /**
   *  Intersection class for simulating traffic in Nagel-Schreckenberg model.
   *
   * @constructor
   * @param {number} id                     - Id of intersection
   * @param {number} lat                    - Latitude of the intersection
   * @param {number} lng                    - Longitude of the intersection
   * @param {Road} inFirstRoad              - Instance of first road in
   * @param {Road} inSecondRoad             - Instance of second road out
   * @param {Road} outFirstRoad             - Instance of first road in
   * @param {Road} outSecondRoad            - Instance of second road out
   * @param {number} carsInput              - Probability of car showing up at the intersection
   * @param {String} name                   - Name of the intersection
   * @param {number} lights                 - 0- roundabout, 1 - red light, 2 - green light
   * @param {int} lightsCounter
   */
  constructor(
    id = 0,
    lat = 0,
    lng = 0,
    inFirstRoad = null,
    inSecondRoad = null,
    outFirstRoad = null,
    outSecondRoad = null,
    carsInput = 1.2,
    name = 'A Intersection',
    lights = 1,
    lightsCounter = 10,
    userChangedLight = false
  ) {
    this.id = id;

    this.lat = lat;
    this.lng = lng;

    this.inFirstRoad = inFirstRoad;
    this.inSecondRoad = inSecondRoad;
    this.outFirstRoad = outFirstRoad;
    this.outSecondRoad = outSecondRoad;

    this.carsInput = carsInput;
    this.newVehicles = []; // inflow vehicles from outer road
    this.vehiclesToProcess = []; // vehicles from Road object connected to Intersection
    this.MAX_VEHICLES_PROCESSED = 3;

    this.lights = lights;
    this.lightsInit = lightsCounter;
    this.lightsCounter = lightsCounter;

    this.name = name;
    this.inflowCoefficient = 0;
    this.userChangedLight = userChangedLight;
  }

  /**
   * Method used for adding new Vehicle to the intersection
   *
   * @param  {Vehicle} vehicle
   * @return void
   */
  addNewVehicle(vehicle) {
    this.newVehicles.push(vehicle);
  }

  /**
   * Method used for loading vehicles from Road
   *
   * @param  {Vehicle} vehicle
   * @return void
   */
  addVehicleFromRoad(vehicle) {
    this.vehiclesToProcess.push(vehicle);
  }

  /**
   * Method used for changing light value - red to green and other way round
   *
   * @return void
   */
  changeLights() {
    if (this.lights === INTERSECTION_TYPES.RED_LIGHT) this.lights = INTERSECTION_TYPES.GREEN_LIGHT;
    else if (this.lights === INTERSECTION_TYPES.GREEN_LIGHT) this.lights = INTERSECTION_TYPES.RED_LIGHT;
  }

  /**
   * Method used for adding vehicles to processing then processing them
   *
   * @return void
   */
  update() {
    let vehiclesNum;
    if (this.MAX_VEHICLES_PROCESSED < this.vehiclesToProcess.length) vehiclesNum = this.MAX_VEHICLES_PROCESSED;
    else {
      if (this.lights !== INTERSECTION_TYPES.GREEN_LIGHT) {
        let numOfVehicles = this.MAX_VEHICLES_PROCESSED - this.vehiclesToProcess.length;

        if (numOfVehicles > this.newVehicles.length) {
          for (let i = this.newVehicles.length; i > 0; i--) {
            this.vehiclesToProcess.push(this.newVehicles[0]);
            this.newVehicles.splice(0, 1);
          }
        } else {
          for (let i = numOfVehicles; i > 0; i--) {
            this.vehiclesToProcess.push(this.newVehicles[0]);
            this.newVehicles.splice(0, 1);
          }
        }
      }
      vehiclesNum = this.vehiclesToProcess.length;
    }
    /**
     * Processing Vehicles
     */
    for (let i = 0; i < vehiclesNum; i++) {
      if (this.id === this.vehiclesToProcess[0].destinationId) this.vehiclesToProcess.splice(0, 1);
      else {
        let distance = Math.abs(this.id - this.vehiclesToProcess[0].destinationId);

        if (this.id < this.vehiclesToProcess[0].destinationId) {
          let distance2 = Math.abs(this.id - (this.vehiclesToProcess[0].destinationId - 16));
          if (distance > distance2) {
            this.outFirstRoad.putVehicle(this.vehiclesToProcess[0]);
          } else {
            if (distance === distance2) {
              if (Math.random() < 0.5) this.outFirstRoad.putVehicle(this.vehiclesToProcess[0]);
              else this.outSecondRoad.putVehicle(this.vehiclesToProcess[0]);
            } else {
              this.outSecondRoad.putVehicle(this.vehiclesToProcess[0]);
            }
          }
        } else {
          let distance2 = Math.abs(this.id - (this.vehiclesToProcess[0].destinationId + 16));
          if (distance > distance2) this.outSecondRoad.putVehicle(this.vehiclesToProcess[0]);
          else {
            if (distance === distance2) {
              if (Math.random() < 0.5) this.outFirstRoad.putVehicle(this.vehiclesToProcess[0]);
              else this.outSecondRoad.putVehicle(this.vehiclesToProcess[0]);
            } else this.outFirstRoad.putVehicle(this.vehiclesToProcess[0]);
          }
        }
        this.vehiclesToProcess.splice(0, 1);
      }
    }
    if (!this.userChangedLight) {
      this.lightsCounter--;
      if (this.lightsCounter <= 0) {
        this.changeLights();
        this.lightsCounter = this.lightsInit;
      }
    }
  }

  /**
   * Method used for converting Intersection to string
   *
   * @return {String}
   */
  toString() {
    return `<Intersection: ${this.name} id=${this.id} lights=${this.lights} lightsCounter=${this.lightsCounter}>`;
  }
}
