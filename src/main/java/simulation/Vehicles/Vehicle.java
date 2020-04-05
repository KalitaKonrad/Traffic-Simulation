package simulation.Vehicles;


/*
*   @version: 1.0
*   @since: 04.04.2020
*/
public abstract class Vehicle {
    /**
     * Vehicle abstract class for Nagel-Schreckenberg model.
     *
     *
     * @param x                             This is a current Vehicle position in x-axis
     * @param y                             Current road lane of the road occupied by the Vehicle
     * @param velocity                      Current velocity of the Vehicle
     *
     * @param brakeProbability              is the Probability iof breaking  by the Vehicle.
     *
     * @param maxVelocity                   Constant speed limit for the Vehicle.
     * @param acceleration                  Constant acceleration value for the Vehicle.
     * @param distanceToForwardingVehicle   Distance to forwarding Vehicle on the road.
     *
     * @see                                 https://en.wikipedia.org/wiki/Nagel%E2%80%93Schreckenberg_model
     */

    int x;
    int y;
    int velocity;

    int maxVelocity;
    int acceleration;
    int distanceToForwardingVehicle;

    double brakeProbability;

    static final int MAX_VELOCITY = 20;
    static final int ACCELERATION = 1;
    static final double BRAKE_PROBABILITY = 0.05;


    public Vehicle(int x, int y) {
        this(x, y, 0);
    }

    public Vehicle(int x, int y, int velocity){
        this(x, y, velocity, MAX_VELOCITY, ACCELERATION, BRAKE_PROBABILITY);
    }

    public Vehicle(int x, int y, int velocity, int maxVelocity, int acceleration, double brakeProbability){
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.maxVelocity = maxVelocity;
        this.acceleration = acceleration;
        this.brakeProbability = brakeProbability;
    }

    /**
     * update method is used to update Vehicle's velocity and position.
     *
     * @return void
     */
    public void update() {
        this.accelerate();
        this.brake();

        this.x += this.velocity;
    }

    /**
     *  accelerate method is used to accelerate Vehicle.
     *
     * @return void
     */
    public void accelerate() {
        this.velocity = Math.min(this.velocity + this.acceleration, this.maxVelocity);
        this.velocity = Math.min(this.velocity, this.distanceToForwardingVehicle - 1);
    }

    /**
     * brake method is used to slow down Vehicle.
     *
     * @return void
     */
    public void brake() {
        if(this.velocity > 0 && this.brakeProbability > Math.random()){
            this.velocity = Math.max(0, this.velocity - this.acceleration);
        }
    }

    /**
     * toString is used to get string representation of the Vehicle object.
     *
     * @return String representation of Vehicle object.
     */
    public abstract String toString();

    /**
     * @return int current x-position of the Vehicle.
     */
    public int getX() {
        return x;
    }

    /**
     * @return int current x-position of the Vehicle.
     */
    public int getY() {
        return y;
    }

    /**
     * @return int current velocity of the Vehicle.
     */
    public int getVelocity() {
        return velocity;
    }

    /**
     * @return int distance from current vehicle to the next vehicle in the same lane.
     */
    public int getDistanceToForwardingVehicle() {
        return distanceToForwardingVehicle;
    }

    /**
     * Method is used to set the distance to forwarding vehicle in the same lane.
     *
     * @param distanceToForwardingVehicle
     */
    public void setDistanceToForwardingVehicle(int distanceToForwardingVehicle) {
        this.distanceToForwardingVehicle = distanceToForwardingVehicle;
    }
}
