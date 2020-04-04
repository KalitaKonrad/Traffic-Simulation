package simulation;


import simulation.Vehicles.Car;

public class Main {

    public static void main(String[] args) {
        Car car = new Car(0,0);

        car.update();
        car.update();
        car.update();
        car.update();

        System.out.println(car);
    }
}
