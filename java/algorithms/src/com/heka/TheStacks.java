package com.heka;

import java.util.Arrays;

/*
* Stacks and Queues
* Video URL: https://www.youtube.com/watch?v=JvGZh_BdF-8
* Created by andrew on 7/05/14.
*/
public class TheStacks {

    // stacks, last item in, first item out
    // queues, first item in, first item out

    private String[] stackArray;
    private int stackSize;
    private int topOfStack = -1;

    TheStacks(int size) {
        stackSize = size;

        stackArray = new String[size];

        Arrays.fill(stackArray, "-1");
    }

    public void push(String input) {
        if (topOfStack + 1 < stackSize) {
            topOfStack++;

            stackArray[topOfStack] = input;
        } else {
            System.out.println("Sorry But the Stack is Full");
        }

        displayTheStack();

        System.out.println("PUSH " + input + " Was Added to the Stack");
    }

    public void pushMany(String multipleValues) {
        String[] tempString = multipleValues.split(" ");

        for (int i = 0; i < tempString.length; i++) {
            push(tempString[i]);
        }
    }

    public String pop() {
        if (topOfStack >= 0) {
            displayTheStack();

            System.out.println("Pop " + stackArray[topOfStack] + " Was Removed From The Stack\n");
            stackArray[topOfStack] = "-1";

            return stackArray[topOfStack--];
        } else {
            displayTheStack();

            System.out.println("Sorry but the stack is empty");

            return "-1";
        }
    }

    public void popAll() {
        for (int i = topOfStack; i >= 0; i--) {
            pop();
        }
    }

    public String peek() {
        displayTheStack();

        System.out.println("Peek " + stackArray[topOfStack] + " Is at the top of the Stack\n");

        return stackArray[topOfStack];
    }

    public void displayTheStack() {
        for (int n = 0; n < 61; n++) {
            System.out.print("-");
        }

        System.out.println();

        for (int n = 0; n < stackSize; n++) {
            System.out.format("| %2s " + " ", n);
        }

        System.out.println("|");

        for (int n = 0; n < 61; n++) {
            System.out.print("-");
        }

        System.out.println();

        for (int n = 0; n < stackSize; n++) {
            if (stackArray[n].equals("-1")) {
                System.out.print("|     ");
            } else {
                System.out.print(String.format("| %2s " + " ", stackArray[n]));
            }
        }

        System.out.println("|");

        for (int n = 0; n < 61; n++) {
            System.out.print("-");
        }

        System.out.println();
    }

    public static void main(String[] args) {
        TheStacks theStack = new TheStacks(10);

        theStack.push("10");
        theStack.push("15");
        theStack.peek();
        theStack.pop();
        theStack.pushMany("12 13 14 15 16");
        theStack.popAll();

        theStack.displayTheStack();
    }
}
