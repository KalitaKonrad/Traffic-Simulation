import Vehicle from './Vehicle';

export default class Intersection {
  constructor(
    id,
    inFirstRoad = null,
    inSecondRoad = null,
    outFirstRoad = null,
    outSecondRoad = null,
    carsInput = null,
    description = null,
    lights = null, // 0 rondo, 1 - red light, 2 - green light
    lightsCounter = null
  ) {
    this.id = id;

    this.inFirstRoad = inFirstRoad;
    this.inSecondRoad = inSecondRoad;
    this.outFirstRoad = outFirstRoad;
    this.outSecondRoad = outSecondRoad;

    // this.vehicles = [];
    this.carsInput = carsInput;
    this.newVehicles = []; // vehicles from outer roud
    this.vehiclesToProcess = []; // vehicles from Road object
    this.MAX_VEHICLES_PROCESSED = 3;

    this.lights = lights;
    this.lightsInit = lightsCounter;
    this.lightsCounter = lightsCounter;

    this.description = description;
    this.vehicleGenerator = 0;
  }

  addNewVehicle(vehicle) {
    this.newVehicles.push(vehicle);
  }

  addVehicleFromRoad(vehicle) {
    this.vehiclesToProcess.push(vehicle);
  }

  changeLights() {
    if (this.lights == 1) {
      this.lights = 2;
      return;
    }
    if (this.lights === 2) this.lights = 1;
  }

  update() {
    /**
     * Adding Vehicles to processing
     */
    let vehiclesNum;
    if (this.MAX_VEHICLES_PROCESSED < this.vehiclesToProcess.length) vehiclesNum = this.MAX_VEHICLES_PROCESSED;
    else {
      if (this.lights !== 2) {
        let freeSpace = this.MAX_VEHICLES_PROCESSED - this.vehiclesToProcess.length;

        if (freeSpace > this.newVehicles.length) {
          for (let i = this.newVehicles.length; i > 0; i--) {
            this.vehiclesToProcess.push(this.newVehicles[0]);
            this.newVehicles.splice(0, 1);
          }
        } else {
          for (let i = freeSpace; i > 0; i--) {
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
              if (Math.random() < 0.5) this.this.outFirstRoad.putVehicle(this.vehiclesToProcess[0]);
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
    this.lightsCounter--;
    if (this.lightsCounter <= 0) {
      this.changeLights();
      this.lightsCounter = this.lightsInit;
    }
  }

  toString() {
    return (
      '<Interesction: desc=' +
      this.description +
      ' id=' +
      this.id +
      ' lights=' +
      this.lights +
      ' lightsCounter=' +
      this.lightsCounter +
      ' VTP=' +
      this.vehiclesToProcess.length +
      ' NV=' +
      this.newVehicles.length +
      '>'
    );
  }
}
