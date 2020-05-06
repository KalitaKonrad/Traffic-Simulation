import VEHICLES_CONST from './consts/vehicles.const';
import { Vehicle } from './Vehicles.js';
export default class class Road {

  constructor (roadArray[][], vehicles, length, width, velocityLimit, id){
//    this.roadArray[length][width];
    this.roadArray = new Vehicle[width][length];
    this.length = length;
    this.width = width;
    this.velocityLimit = velocityLimit;
    this.id = id;
    this.vehicles = new Array();
//  this.out = new Intersection;
  }
  addVehicle(vehicle){
          this.roadArray[vehicle.y][vehicle.x] = vehicle;
          this.vehicles.push(vehicle);
  }
  checkCollision(vehicle){
    var distance = 0;
    for(i = vehicle.x + 1; i < this.length; i++){
      if(this.roadArray[vehicle.x][i] != null) {
        distance = i - vehicle.x - 1;
        break;
      }
    }
    //Tu jest zmaina pasów :
/*    if(distance != 0 && vehicle.velocity > distance - 1){
      if(!switchLaneLeft(vehicle)){
        vehicle.velocity= distance - 1;
      }
    }
    if(vehicle.velocity > 0){
      switchLaneRight(vehicle);
    } */

  }
  stopBeforeIntersect(vehicle){
    distance = this.length - vehicle.x - 1;
    if(vehicle.velocity > distance -1){
      if(distance > 0) vehicle.velocity = distance;
      else vehicle.velocity = 0;
    }
  }

  update(){
    var toRemove = new Array();
    for (v of this.vehicles){
      v.changeVelocity();
            if(v.velocity) > this.velocityLimit) v.velocity = this.velocityLimit;
            if(out.lights == 1){
                this.stopBeforeIntersection(v);
            }

    checkCollision(v);

    if(v.x + v.velocity < this.length){
      v.move();
      roadArray[v.y][v.x] = v;
    }
    else{
      toRemove.push(v);
      roadArray[v.y][v.x] = null;
//      if (out.getId() != v.getDestinationId()) out.addVehicleFromRoad(v);
    }
    if(v.velocity > 0){
      roadArray[v.y][v.x - v.velocity] = null;
    }

   }
//   vehicles.removeAll(toRemove);
   for (i = 0; i < toRemove.length; i++){
     removedIndx = this.vehicles.indexOf(toRemove[i]);
     vehicle.splice(removedIndx, 1);
   }
 }


  putVehicle(vehicle) {
        Random rand = new Random();
        var possibleLocation = new Array();

        for(int i=0;i<width;i++){
            if(this.roadArray[i][0] == null) possibleLocation.push(i);
        }
        vehicle.x = 0;
        vehicle.y = possibleLocation[rand.nextInt(possibleLocation.length())];
        this.addVehicle(vehicle);
  }

  toString() {
        var result = "Road not initialized";
        if(this.roadArray != null){
            result = "";
            for(i=0;i<this.roadArray.length;i++){
                for(j=0;j<this.roadArray[0].length;j++){
                    if(this.roadArray[i][j] == null)result += "-" ;
                    else {
                        if(this.roadArray[i][j].type == VEHICLES_CONST.TRUCK)result += "T";
                        else {
                            if (this.roadArray[i][j].type == VEHICLES_CONST.CAR) result += this.roadArray[i][j].velocity;
                            else result += "?";
                        }
                    }
                }
                result += "\n";
            }
        }
        return result;
    }

}
