package com.heka;

import java.util.Arrays;

/*
* Partitioning
* Video URL: https://www.youtube.com/watch?v=mN5ib1XasSA
* Created by andrew on 7/06/14.
* Used for QuickSort
*/
public class Partitioning {
    private static int[] theArray;
    private static int arraySize;

    public void partitionArray(int pivot) {
        int leftPointer = -1;
        int rightPointer = arraySize;

        while (true) {
            while (leftPointer < (arraySize - 1) && theArray[++leftPointer] < pivot) {}

            printHorizontalArray(leftPointer, rightPointer);
            System.out.println(theArray[leftPointer] + " in index " + leftPointer + " is bigger then the pivot value " + pivot);
            while (rightPointer > 0 && theArray[--rightPointer] > pivot) {}

            printHorizontalArray(leftPointer, rightPointer);
            System.out.println(theArray[rightPointer] + " in index " + rightPointer + " is small then the pivot value " + pivot);

            printHorizontalArray(leftPointer, rightPointer);

            if (leftPointer >= rightPointer) {
                break;
            } else {
                swapValues(leftPointer, rightPointer);
                System.out.println(theArray[leftPointer] + " was swaped for  " + theArray[rightPointer]);
            }
        }
    }

    public void generateRandomArray() {
        for (int i = 0; i < arraySize; i++) {

            // Generate a random array with values between
            // 10 and 59
            theArray[i] = (int) (Math.random() * 50) + 10;
        }
    }

    Partitioning(int newArraySize) {
        arraySize = newArraySize;
        theArray = new int[arraySize];
        generateRandomArray();
    }

    public void swapValues(int indexOne, int indexTwo) {
        int temp = theArray[indexOne];
        theArray[indexOne] = theArray[indexTwo];
        theArray[indexTwo] = temp;
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

        for (int n = 0; n < 51 ; n++) {
            System.out.print("-");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Partitioning partitionArray = new Partitioning(10);
        partitionArray.generateRandomArray();
        System.out.println(Arrays.toString(Partitioning.theArray));
        partitionArray.partitionArray(35);
        System.out.println(Arrays.toString(Partitioning.theArray));
    }
}
