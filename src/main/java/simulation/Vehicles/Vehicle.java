package simulation.Vehicles;


/*
*   @version: 1.0
*   @since: 04.04.2020
*/
public abstract class Vehicle {
    /**
     * Vehicle abstract class for Nagel-Schreckenberg model.
     *
     * @param x This is a current Vehicle position in x-axis
     * @param y Current road lane of the road occupied by the Vehicle
     * @param velocity Current velocity of the Vehicle
     *
     * @param brakeProbability is the Probability iof breaking  by the Vehicle.
     *
     * @param maxVelocity Constant speed limit for the Vehicle.
     * @param acceleration Constant acceleration value for the Vehicle.
     *
     */

    int x;
    int y;
    int velocity;

    int maxVelocity;
    int acceleration;

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
     * @method update is used to update Vehicle's velocity and position.
     *
     * @return void
     */
    public void update() {
        this.accelerate();
        this.brake();

        this.x += this.velocity;
    }

    /**
     * @method accelerate is used to accelerate Vehicle.
     *
     * @return void
     */
    public void accelerate() {
        this.velocity = Math.min(this.velocity + this.acceleration, this.maxVelocity);
    }

    /**
     * @method accelerate is used to slow down Vehicle.
     *
     * @return void
     */
    public void brake() {
        if(this.velocity > 0 && this.brakeProbability > Math.random()){
            this.velocity = Math.max(0, this.velocity - this.acceleration);
        }
    }

    /**
     * @method toString is used to get string representation of the Vehicle object.
     *
     * @return String
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
}
