package simulation.Vehicles;

/*
 *   @version: 1.0
 *   @since: 04.04.2020
 */
public class Car extends Vehicle{
    /**
     * Car class  for Nagel-Schreckenberg model extending Vehicle abstract class.
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

    public Car(int x, int y) {
        super(x, y);
    }

    public Car(int x, int y, int velocity) {
        super(x, y, velocity);
    }

    public Car(int x, int y, int velocity, int maxVelocity, int acceleration, double brakeProbability){
        super(x, y, velocity, maxVelocity, acceleration, brakeProbability);
    }

    @Override
    public String toString() {
        return "<Car pos=(" + this.x + ", " + this.y + ") dist="+ this.distanceToForwardingVehicle + ">";
    }
}
