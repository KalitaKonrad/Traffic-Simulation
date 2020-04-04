package simulation;


import simulation.Vehicles.Car;
import simulation.Vehicles.Vehicle;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

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
        return new Vehicle[this.length][this.n_lanes];
    }

    /**
     * @method toString returns string representation of the road.
     * @return String
     */
    public String toString() {
        String result = "";
        int counter = 0;
        for(int i=0; i < this.length; i++){
            for(int j=0; j < this.n_lanes; j++){
                if(road[i][j] != null) {
                    result += road[i][j].getVelocity();
                } else {
                    result += "-";
                }
                counter++;
            }
            if (counter % this.length == 0){
                result += "\n";
            }
        }
        return result;
    }

    /**
     * @method update is the method to update all vehicle states.
     * @return void
     */
    public void update() {
        this.road = this.getEmptyRoadArray();

        for(Vehicle vehicle: vehicles){
            int prev_x = vehicle.getX();
            int prev_y = vehicle.getY();

            if(prev_x >= 0 && prev_x < this.length){
                vehicle.update();
                int new_x = vehicle.getX();
                int new_y = vehicle.getY();

                this.road[new_x][new_y] = vehicle; // nie mozna dodac pojadu gdy jest poza tablica
                                                    // ale tutaj bedzie hamowanie przed koncem wiec do ogarniecia
            }
        }
    }

    public void addCar() {
        Random r = new Random();
        this.vehicles.add(
                new Car(0,r.nextInt(this.n_lanes), 0, this.speedLimit, 1, 0.1)
        );
    }
}
