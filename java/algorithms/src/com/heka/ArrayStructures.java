package com.heka;
/* ArrayStructures
 * Video 1 URL: https://www.youtube.com/watch?v=f5OD9CKrZEw
 *
 * Sort Algorithms
 * Video 2 URL: https://www.youtube.com/watch?v=JUOyKSZScW0
 * Created by andrew on 5/24/14.
 */
public class ArrayStructures {
    private int[] theArray = new int[50];
    private int arraySize = 10;

    public void generateRandomArray() {

        for (int i = 0; i < arraySize; i++) {
            theArray[i] = (int)(Math.random() * 10) + 10;
        }
    }

    public void printArray() {
        System.out.println("----------");

        for (int i = 0; i < arraySize; i++) {
            System.out.print("| " + i + " | ");
            System.out.println(theArray[i] + " |");
            System.out.println("----------");
        }
    }

    public int getValueAtIndex(int index) {
        if (index < arraySize) {
            return theArray[index];
        } else {
            return 0;
        }
    }

    public boolean doesArrayContainThisValue(int searchValue) {
        boolean valueInArray = false;

        for (int i = 0; i < arraySize; i++) {
            if (theArray[i] == searchValue) {
                valueInArray = true;
            }
        }

        return valueInArray;
    }

    public void deleteIndex(int index) {
        if (index < arraySize) {
            for (int i = index; i < (arraySize - 1); i++) {
                theArray[i] = theArray[i+1];
            }

            arraySize--;
        }
    }

    public void insertValue(int value) {
        if (arraySize < 50) {
            theArray[arraySize] = value;
            arraySize++;
        }
    }

    public String linearSearchForValue(int value) {
        boolean valueInArray = false;
        String indexsWidthValue = "";

        System.out.print("The Value was Found in the following: ");

        for (int i = 0; i < arraySize; i++) {
            if (theArray[i] == value) {
                valueInArray = true;
                System.out.print(i + " ");
                indexsWidthValue += i + " ";
            }

            printHorizontalArray(i, -1);
        }

        if (!valueInArray) {
            indexsWidthValue = "None";
            System.out.print(indexsWidthValue);

        }

        System.out.println();

        return indexsWidthValue;
    }

    public void bubbleSort() {
        for (int i = arraySize - 1; i > 1; i--) {
            for (int j = 0; j < i; j++) {
                if (theArray[j] > theArray[j+1]) {
                    swapValue(j, j+1);

                    printHorizontalArray(i, j);
                }
            }
        }
    }

    public void binarySearchForValue(int value) {
        int lowIndex = 0;
        int highIndex = arraySize - 1;

        while (lowIndex < highIndex) {
            int middleIndex = (highIndex + lowIndex) / 2;

            if (theArray[middleIndex] < value) {
                lowIndex = middleIndex + 1;
            } else if (theArray[middleIndex] > value) {
                highIndex = middleIndex - 1;
            } else {
                // We found a match
                System.out.println("\nFound a Match for " + value + " at Index " + middleIndex);

                // Break out of the while loop
                lowIndex = highIndex + 1;
            }

            printHorizontalArray(middleIndex, -1);
        }
    }

    public void selectionSort() {
        for (int x = 0; x < arraySize; x++) {
            int minimum = x;

            for (int y = x; y < arraySize; y++) {
                if (theArray[minimum] > theArray[y]) {
                    minimum = y;
                }
            }

            swapValue(x, minimum);

            printHorizontalArray(x, -1);
        }
    }

    // Best of all the elementry sorts
    public void insertionSort() {
        for (int i = 1; i < arraySize; i++) {
            int j = i;

            int toInsert = theArray[i];

            while ((j > 0) && (theArray[j-1] > toInsert)) {
                theArray[j] = theArray[j-1];
                j--;

                printHorizontalArray(i, j);

                theArray[j] = toInsert;

                printHorizontalArray(i, j);

                System.out.println("\nArray[i] = " + theArray[i] +
                        " Array[j] = " + theArray[j] +
                        " toInsert = " + toInsert);
            }
        }
    }

    public void swapValue(int indexOne, int indexTwo) {
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
        ArrayStructures newArray = new ArrayStructures();
        newArray.generateRandomArray();
        newArray.printArray();
        System.out.println(newArray.getValueAtIndex(3));
        System.out.println(newArray.doesArrayContainThisValue(18));

        // Delete an index from the array
        newArray.deleteIndex(4);
        newArray.printArray();

        // Insert into an array
        newArray.insertValue(55);
        newArray.printArray();

        // Linear Search
        //newArray.linearSearchForValue(11);

        // Bubble Sort
        //newArray.bubbleSort();

        // Binary Search
        //System.out.println("Binary Search");
        //newArray.binarySearchForValue(11);

        // Selection Sort
        //System.out.println("Selection Sort");
        //newArray.selectionSort();

        // Insertion Sort
        System.out.println("Insertion Sort");
        newArray.insertionSort();
    }
}
