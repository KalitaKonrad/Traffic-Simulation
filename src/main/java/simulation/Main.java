package simulation;


import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Road road = new Road(30, 2, 3);
        road.addCar(0);
        road.update();
        road.update();

        road.addCar(0);
        road.update();
        System.out.println(road.toString());
        road.update();
        System.out.println(road.toString());
        road.update();
        System.out.println(road.toString());
        road.update();
        System.out.println(road.toString());
        road.update();
        System.out.println(road.toString());
        road.update();
        System.out.println(road.toString());
        road.update();
        System.out.println(road.toString());
        road.update();
        System.out.println(road.toString());
        road.update();
        System.out.println(road.toString());
        road.update();
        System.out.println(road.toString());
        road.update();
        System.out.println(road.toString());
        road.update();


    }
}
