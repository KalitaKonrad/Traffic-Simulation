import Vehicle from './Vehicle';

export default class Intersection {
  constructor(
    id,
    inFirstRoad = null,
    inSecondRoad = null,
    outFirstRoad = null,
    outSecondRoad = null,
    vehicles = null,
    lights = null,
    lightsCounter = null,
    description = null
  ) {
    this.id = id;

    this.inFirstRoad = inFirstRoad;
    this.inSecondRoad = inSecondRoad;
    this.outFirstRoad = outFirstRoad;
    this.outSecondRoad = outSecondRoad;

    this.vehicles = vehicles;
    this.newVehicles = [];
    this.vehiclesToProcess = [];
    this.MAX_VEHICLES_PROCESSED = 3;

    this.lights = lights;
    this.lightsCounter = lightsCounter;

    this.description = description;
  }

  addNewVehicle(vehicle) {
    this.newVehicles.push(vehicle);
  }

  addVehicleFromRoad(vehicle) {
    this.vehiclesToProcess.push(vehicle);
  }
}
