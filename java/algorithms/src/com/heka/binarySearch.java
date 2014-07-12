package com.heka;

/*
* Sort Algorithms
* Video 2 URL: https://www.youtube.com/watch?v=JUOyKSZScW0
* Created by andrew on 5/24/14.
*/
public class binarySearch {
    private int[] theArray = new int[50];
    private int arraySize = 10;

    public void generateRandomArray() {
        for (int i = 0; i < arraySize; i++) {
            theArray[i] = (int)(Math.random() * 10) + 10;
        }
    }

    public void bubbleSort() {
        // Get smaller
        for (int i = arraySize - 1; i > 1; i--) {

            // Get Larger
            for (int j = 0; j < i; j++) {
                if (theArray[j] > theArray[j+1]) {
                    swapValue(j, j+1);
                }
            }
        }
    }

    public void swapValue(int indexOne, int indexTwo) {
        int temp = theArray[indexOne];
        theArray[indexOne] = theArray[indexTwo];
        theArray[indexTwo] = temp;
    }

    // Binary Search requires bubble sort
    public void binarySearchForValue(int value) {
        int lowIndex = 0;
        int highIndex = arraySize - 1;

        while (lowIndex <= highIndex) {
            int middleIndex = (highIndex + lowIndex) / 2;

            if (theArray[middleIndex] < value) {
                lowIndex = middleIndex + 1;
            } else if (theArray[middleIndex] > value) {
                highIndex = middleIndex - 1;
            } else {
                System.out.println("\nFound a match for " + value + " at index " + middleIndex);
                lowIndex = highIndex + 1;
            }

            printHorizontalArray(middleIndex, -1);
        }
    }

    public void printHorizontalArray(int i, int j) {
        for (int n = 0; n < 51; n++) {
            System.out.print("-");
        }
        System.out.println();

        for (int n = 0; n < arraySize; n++) {
            System.out.print("| " + n + "  ");
        }
        System.out.println("|");

        for (int n = 0; n < 51; n++) {
            System.out.print("-");
        }
        System.out.println();

        for (int n = 0; n < arraySize; n++) {
            System.out.print("| " + theArray[n] + " ");
        }
        System.out.println("|");

        for (int n = 0; n < 51; n++) {
            System.out.print("-");
        }
        System.out.println();
        // END OF FIRST PART

        // ADDED FOR BUBBLE SORT
        if (j != -1) {
            // Add the +2 to fix spacing
            for (int k = 0; k < ((j*5) + 2); k++) {
                System.out.print(" ");
            }
            System.out.print(j);
        }

        // THEN ADDED THIS CODE
        if (i != -1) {
            for (int l = 0; l < (5*(i- j)-1); l++) {
                System.out.print(" ");
            }
            System.out.print(i);
        }

        System.out.println();
    }

    public static void main(String[] args) {
        binarySearch newArray = new binarySearch();
        newArray.generateRandomArray();

        // Must use bubble sort before binary search
        newArray.bubbleSort();

        // Binary Search
        System.out.println("Binary Search");
        newArray.binarySearchForValue(11);
    }
}
