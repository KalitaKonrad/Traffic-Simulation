package simulation;


import simulation.Vehicles.Car;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Road road = new Road(100, 2, 15);

        Scanner sc= new Scanner(System.in);
        while(true) {
          int decision = sc.nextInt();
          if (decision == 1){
              road.addCar();
          }
          road.update();
          System.out.println(road.toString());
        }
    }
}
