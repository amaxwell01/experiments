/*
 * Quick Sort
 * Average complexity of O(n log n)
 *
 * quickSort() contains:
 * * a call to partition() to get the new pivot point
 * * a call upon itself quickSort()
 *
 * partition() contains:
 * * a call to swap();
 *
 * swap() contains:
 * * Just swapping the value between two indexes
 */

// 1. Find a "pivot" item in the array. This item is the basis for comparison for a single round.
// 2. Start a pointer (the left pointer) at the first item in the array.
// 3. Start a pointer (the right pointer) at the last item in the array.
// 4. While the value at the left pointer in the array is less than the pivot value, move the left pointer to the right (add 1). Continue until the value at the left pointer is greater than or equal to the pivot value.
// 5. While the value at the right pointer in the array is greater than the pivot value, move the right pointer to the left (subtract 1). Continue until the value at the right pointer is less than or equal to the pivot value.
// 6. If the left pointer is less than or equal to the right pointer, then swap the values at these locations in the array.
// 7. Move the left pointer to the right by one and the right pointer to the left by one.
// 8. If the left pointer and right pointer don’t meet, go to step 1.
var swap = function(items, firstIndex, secondIndex) {
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;

    return items;
};

var partition = function(items, leftPointer, rightPointer) {
    var pivot = items[Math.floor((rightPointer + leftPointer) / 2)];

    while (leftPointer <= rightPointer) {
        // 4. While the value at the left pointer in the array is less than the pivot value, move the left pointer to the right (add 1).
        // Continue until the value at the left pointer is greater than or equal to the pivot value.
        while (items[leftPointer] < pivot) {
            leftPointer++;
        }

        // 5. While the value at the right pointer in the array is greater than the pivot value,
        // move the right pointer to the left (subtract 1). Continue until the value at the right pointer is
        // less than or equal to the pivot value.
        while (items[rightPointer] > pivot) {
            rightPointer--;
        }

        // 6. If the left pointer is less than or equal to the right pointer, then swap the values at these locations in the array.
        if (leftPointer <= rightPointer) {
            items = swap(items, leftPointer, rightPointer);
            leftPointer++;
            rightPointer--;
        }
    }

    return leftPointer;
};

var quickSort = function(items, left, right) {
    var index;
    
    if (items.length > 1) {
        // 2. Start a pointer (the left pointer) at the first item in the array.
        left = (typeof(left) !== 'number') ? 0 : left;

        // 3. Start a pointer (the right pointer) at the last item in the array.
        right = (typeof(right) !== 'number') ? (items.length - 1) : right;

        // 1. Find a "pivot" item in the array. This item is the basis for comparison for a single round.
        index = partition(items, left, right);

        if (left < (index - 1)) {
            quickSort(items, left, index - 1);
        }

        if (index < right) {
            quickSort(items, index, right);
        }

        // 8. If the left pointer and right pointer don't meet, go to step 1.
    }

    return items;
};

// Testing the quickSort() algorithm
var exampleArray = quickSort([99, 54, 87, 65, 49, 53, 22, 70, 59, 12, 12]);
console.log(exampleArray);
