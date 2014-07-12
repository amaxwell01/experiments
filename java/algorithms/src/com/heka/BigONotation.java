/* Big O Notation
 * URL: https://www.youtube.com/watch?v=V6mKVRU1evU
 */
package com.heka;

public class BigONotation {
    private int[] theArray;
    private int arraySize;
    private int itemsInArray = 0;
    private long startTime;
    private long endTime;

    public static void main(String[] args) {
        long startTime;
        long endTime;

        // O(1)
        BigONotation testAlgo1 = new BigONotation(100000);
        testAlgo1.addItemToArray(1000);

        // O(N)
        System.out.println("testAlgo2");
        BigONotation testAlgo2 = new BigONotation(100000);
        testAlgo2.generateRandomArray();
        testAlgo2.linearSearchForValue(20);

        System.out.println("testAlgo3");
        BigONotation testAlgo3 = new BigONotation(200000);
        testAlgo3.generateRandomArray();
        testAlgo3.linearSearchForValue(20);


        // O(N^2)
        BigONotation testAlgo6 = new BigONotation(10000);
        testAlgo6.generateRandomArray();
        testAlgo6.bubbleSort();

        BigONotation testAlgo7 = new BigONotation(20000);
        testAlgo7.generateRandomArray();
        testAlgo7.bubbleSort();

        // O(log N)
        System.out.println("Binary Search: testAlgo8");
        BigONotation testAlgo8 = new BigONotation(100000);
        testAlgo8.binarySearchForValue(20);

        System.out.println("testAlgo9");
        BigONotation testAlgo9 = new BigONotation(200000);
        testAlgo9.binarySearchForValue(20);

        // O(n log n)
        startTime = System.currentTimeMillis();
        BigONotation testAlgo10 = new BigONotation(100000);
        testAlgo10.quickSort(0, testAlgo10.itemsInArray);
        endTime = System.currentTimeMillis();
        System.out.println("Quick Sort Took: " + (endTime - startTime) + "ms");

        startTime = System.currentTimeMillis();
        BigONotation testAlgo11 = new BigONotation(200000);
        testAlgo11.quickSort(0, testAlgo11.itemsInArray);
        endTime = System.currentTimeMillis();
        System.out.println("Quick Sort Took: " + (endTime - startTime) + "ms");

    }

    // O(1)
    // Code that executes the exact same way, no matter how big the array is
    public void addItemToArray(int newItem) {
        theArray[itemsInArray++] = newItem;

        System.out.println("Item Length:" + theArray.length);
    }

    // O(N)
    // Algorithm that's "time to complete" will directly
    // grow based on the amount of data
    // Example: Linear search
    public void linearSearchForValue(int value) {
        boolean valueInArray = false;
        String indexWithValue = "";

        startTime = System.currentTimeMillis();

        for (int i = 0; i < arraySize; i++) {
            if(theArray[i] == value) {
                valueInArray = true;
                indexWithValue =+ i + " ";
            }
        }

        System.out.println("Value Found: " + valueInArray);
        endTime = System.currentTimeMillis();
        System.out.println("Linear Search Took: " + (endTime - startTime) + "ms");
    }

    // O(N^2)
    // Algorithm that's "time to complete" will directly
    // grow based on the square of the amount of data
    // Nested iterations
    // For every loop you have to go through every item in the array, then
    // With the nested loop, you have to do it again for the nested loop
    // Bad and should be avoided
    // Example: Bubble sort
    public void bubbleSort() {
        startTime = System.currentTimeMillis();

        for (int i = arraySize - 1; i > 1; i--) {
            for (int j = 0; j < i; j++) {
                if (theArray[j] > theArray[j+1]) {
                    swapValues(j, j+1);
                }
            }
        }

        endTime = System.currentTimeMillis();
        System.out.println("BubbleSort Took: " + (endTime - startTime) + "ms");
    }


    // O(log N)
    // Decreased roughly 50% each time through the algorithm
    // Example: Binary Search
    public void binarySearchForValue(int value) {
        startTime = System.currentTimeMillis();


        int lowIndex = 0;
        int highIndex = arraySize - 1;
        int timesThrough = 0;

        while(lowIndex <= highIndex) {
            int middleIndex = (highIndex + lowIndex) / 2;

            if (theArray[middleIndex] < value) {
                lowIndex = middleIndex + 1;
            } else if (theArray[middleIndex] > value) {
                highIndex = middleIndex - 1;
            } else {
                System.out.println("Found Match in index: " + middleIndex);
                lowIndex = highIndex + 1;
            }

            timesThrough++;
        }

        endTime = System.currentTimeMillis();
        System.out.println("Binary Search Took: " + (endTime - startTime) + "ms");
        System.out.println("Times Through: " + timesThrough);
    }

    // O(n log n)
    // Most Efficient, does not shift values
    // Example: Quick Sort
    public void quickSort(int left, int right) {
        if (right - left <= 0) {
            return;
        } else {
            int pivot = theArray[right];
            int pivotLocation = partitionArray(left, right, pivot);
            quickSort(pivotLocation + 1, right);
        }
    }

    public int partitionArray(int left, int right, int pivot) {
        int leftPointer = left - 1;
        int rightPointer = right;

        while(true) {
            while(theArray[++leftPointer] < pivot) {
                ;
            }

            while(rightPointer > 0 && theArray[--rightPointer] > pivot) {
                ;
            }

            if (leftPointer >= rightPointer) {
                break;
            } else {
                swapValues(leftPointer, rightPointer);
            }
        }

        swapValues(leftPointer, right);
        return leftPointer;
    }

    // Constructor
    BigONotation(int size) {
        arraySize = size;
        theArray = new int[size];
    }

    public void swapValues(int indexOne, int indexTwo) {
        int temp = theArray[indexOne];
        theArray[indexOne] = theArray[indexTwo];
        theArray[indexTwo] = temp;
    }

    public void generateRandomArray() {
        for (int i = 0; i < arraySize; i++) {
            theArray[i] = (int) (Math.random() * 1000) + 10;
        }
        itemsInArray = arraySize - 1;
        System.out.println("Items in array: " + arraySize);
    }
}
