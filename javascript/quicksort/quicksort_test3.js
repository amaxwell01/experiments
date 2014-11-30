var swap = function(items, left, right) {
    var temp = items[left];
    items[left] = items[right];
    items[right] = temp;

    return items;
};

var partition = function(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)];

    while(left <= right) {
        while(items[left] < pivot) {
            left++;
        }

        while(items[right] > pivot) {
            right--;
        }

        if (left <= right) {
            items = swap(items, left, right);
            left++;
            right--;
        }
    }

    return left;
};

var quickSort = function(items, left, right) {
    var index;

    if (items.length > 1) {
        left = typeof(left) !== 'number' ? 0 : left;
        right = typeof(right) !== 'number' ? (items.length - 1) : right;
        index = partition(items, left, right);

        if (left < (index - 1)) {
            quickSort(items, left, (index - 1));
        }

        if (index < right) {
            quickSort(items, index, right);
        }
    }

    return items;
};

// Testing the quickSort() algorithm
var exampleArray = quickSort([99, 54, 87, 65, 49, 53, 22, 70, 59, 12, 12]);
console.log(exampleArray);
