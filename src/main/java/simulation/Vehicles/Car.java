package simulation.Vehicles;

/*
 *   @version: 1.0
 *   @since: 04.04.2020
 */
public class Car extends Vehicle{
    /**
     * Car class  for Nagel-Schreckenberg model extending Vehicle abtract class.
     *
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
