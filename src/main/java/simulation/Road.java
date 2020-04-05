package simulation;


import simulation.Vehicles.Car;
import simulation.Vehicles.Vehicle;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

/*
 *   @version: 1.0
 *   @since: 04.04.2020
 */
public class Road {
    /**
     *  Road class used to simulate traffic in Nagel-Schreckenberg model.
     *
     * @param length        This is the total length of the road.
     * @param n_lanes       Number of the lanes in the road.
     *
     * @param road          Road Array is the representation of the entire road.
     * @param vehicles      All the vehicles on the entire road.
     *
     * @param speedLimit    Speed Limit, max velocity on the entire road.
     *
     */

    int length;
    int n_lanes;

    Vehicle[][] road;
    ArrayList<Vehicle> vehicles = new ArrayList<>();

    int speedLimit;

    final static int SPEED_LIMIT = 20;

    public Road(int length, int n_lanes) {
        this(length, n_lanes, SPEED_LIMIT);
    }

    public Road(int length, int n_lanes, int speedLimit) {
        this.length = length;
        this.n_lanes = n_lanes;
        this.speedLimit = speedLimit;
        this.road = this.getEmptyRoadArray();
    }

    /**
     * @method getEmptyRoadArray
     * @return Vehicle[][] the 2D array of vehicles states on the road.
     */
    private Vehicle[][] getEmptyRoadArray() {
        return new Vehicle[this.n_lanes][this.length];
    }

    /**
     * @method toString returns string representation of the road.
     * @return String
     */
    public String toString() {
        String result = "";
        int counter = 0;
        for(int i=0; i < this.n_lanes; i++){
            for(int j=0; j < this.length; j++){
                if(road[i][j] != null) {
                    result += "(" +  road[i][j].getVelocity() + ", " + road[i][j].getDistanceToForwardingVehicle() + ")";
                } else {
                    result += "  -  ";
                }
                counter++;
            }
            result += "\n";
        }
        return result;
    }

    /**
     * @method update is the method to update all vehicle states.
     * @return void
     */
    public void update() {
        this.road = this.getEmptyRoadArray();
        this.checkCollisions();

        for(Vehicle vehicle: vehicles){
            vehicle.update();

            int new_x = vehicle.getX();
            int new_y = vehicle.getY();

            if (new_x >= this.length) {
                vehicles.remove(vehicle);
            } else {
                this.road[new_y][new_x] = vehicle;  // nie mozna dodac pojadu gdy jest poza tablica
                                                    // ale tutaj bedzie hamowanie przed koncem wiec do ogarniecia
            }
        }
    }

    /**
     * @method checkCollisions check the distance between vehicles/ end of the road
     *          and sets this value into DistanceToForwardingVehicle,
     *          then vehicle sets the right value of velocity.
     *
     * @return void
     */
    public void checkCollisions() {
        for(Vehicle vehicle: vehicles) {
            int g = this.length - vehicle.getX() - 1;

            List<Vehicle> otherVehiclesOnSameLane = vehicles.stream().
                    filter(v -> v.getY() == vehicle.getY()).
                    filter(v -> v.getX() > vehicle.getX()).
                    collect(Collectors.toList());
            System.out.println(vehicle.toString() + " >>> " + otherVehiclesOnSameLane.toString());

            for(Vehicle other: otherVehiclesOnSameLane) {
                int distance = other.getX() - vehicle.getX();
                if (distance < g) {
                    g = distance;
                }
            }
            vehicle.setDistanceToForwardingVehicle(g);
        }
    }

    /**
     * @method addCar adding Car on chosen lane on the road.
     *
     * @param lane is the lane index on the road (y-axis).
     * @return void
     */
    public void addCar(int lane) {
        this.vehicles.add(
                new Car(0,lane, 0, this.speedLimit, 1, 0.1)
        );
    }
}
