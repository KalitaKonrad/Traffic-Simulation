package simulation;


import simulation.Vehicles.Car;
import simulation.Vehicles.Vehicle;

import java.util.ArrayList;
import java.util.List;
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
     * @param road          Array which is the representation of the entire road
     *                      (we are using road array only to represent Road object,
     *                      all operations are performed on vehicles List).
     * @param vehicles      List of the Vehicles objects on the entire road.
     *
     * @param speedLimit    Speed Limit, max velocity on the entire road.
     *
     * @see                 https://en.wikipedia.org/wiki/Nagel%E2%80%93Schreckenberg_model
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
     * getEmptyRoadArray returns empty road array (dimensions: n_lanes x length).
     *
     * @return Vehicle[][] the 2D array of vehicles states on the road.
     */
    private Vehicle[][] getEmptyRoadArray() {
        return new Vehicle[this.n_lanes][this.length];
    }

    /**
     * toString returns string representation of the road.
     *
     * @return String Road representation.
     */
    public String toString() {
        String result = "";
        for(int i=0; i < this.n_lanes; i++){
            for(int j=0; j < this.length; j++){
                if(road[i][j] != null) {
                    result += "(" +  road[i][j].getVelocity() + ", " + road[i][j].getDistanceToForwardingVehicle() + ")";
                } else {
                    result += "  -  ";
                }
            }
            result += "\n";
        }
        return result;
    }

    /**
     *  update is the method to update all vehicle states
     *  and calculate its collisions.
     *
     * @return void
     *
     * @see Vehicles.Vehicle.update method.
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
     * checkCollisions check the distance between vehicles/ end of the road
     * and sets this value into DistanceToForwardingVehicle,
     * then vehicle sets the right value of velocity.
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
     * addCar adding Car on chosen lane on the road.
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
