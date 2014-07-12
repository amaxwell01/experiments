package com.heka;

/*
* Recursion
* Video URL: https://www.youtube.com/watch?v=neuDuf_i8Sg
* Blog URL: http://www.newthinktank.com/2013/03/java-recursion/
* Created by andrew on 7/06/14.
* Recursion is a method that calls itself until it reaches an end point using addition
* Factorial is a method that calls itself until it reaches an end point using multiplication
*/
public class Recursion {

    public static void main(String[] args) {
        Recursion recursionTool = new Recursion();
        //recursionTool.calculateSquaresToPrint(6);
//        System.out.println("TriangularNumber: " + recursionTool.getTriangularNum(6));
//        System.out.println("TriangularNumberRecursion: " + recursionTool.getTriangularRecursion(6));
        System.out.println("TriangularNumberFactorial: " + recursionTool.getfactorial(6));
    }

    public int getTriangularNum(int number) {
        int triangularNumber = 0;

        // 3+2+1 = 6

        while (number > 0) {
            triangularNumber = triangularNumber + number;
            number--;
        }

        return triangularNumber;
    }

    public int getTriangularRecursion(int number) {

        System.out.println("Method " + number);

        if (number == 1) {
            System.out.println("Returned 1");
            return 1;
        } else {
            int result = number + getTriangularRecursion(number - 1);
            System.out.print("Returned " + result);
            System.out.println(" : " + number + " + getTriangularNumberRecursion(" + number + " - 1)");
            return result;
        }
    }

    // Factorial
    //F(3) = 3 * 2 * 1 = 6

    public int getfactorial(int number) {
        System.out.println("Method " + number);

        if (number == 1) {
            System.out.println("Returned 1");
            return 1;
        } else {
            int result = number * getfactorial(number - 1);
            System.out.print("Returned " + result);
            System.out.println(" : " + number + " * getFactorial(" + number + " - 1)");
            return result;
        }
    }

    // USED TO DEMONSTRATE TRIANGULAR NUMBERS

    // Draws the number of squares that are passed in horizontally

    public void drawSquares(int howManySquares) {
        for (int i = 0; i < howManySquares; i++) {
            System.out.print(" --  ");
        }

        System.out.println();

        for (int i = 0; i < howManySquares; i++) {
            System.out.print("|" + howManySquares + " | ");
        }

        System.out.println();

        for (int i = 0; i < howManySquares; i++) {
            System.out.print(" --  ");
        }

        System.out.println("\n");
    }

    public void calculateSquaresToPrint(int number) {
        for (int i = 1; i <= number; i++) {
            for (int j = 1; j < i; j++) {
                drawSquares(j);
            }

            System.out.println("Triangular Number: " + calcTriangularNum(i));
        }
    }

    public double calcTriangularNum(int number) {
        return .5 * number * (1 + number);
    }
}
