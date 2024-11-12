function firstNegativeIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return i;
        }
    }
    return -1; // Return -1 if there are no negative numbers
}

// Example usage:
const array = [3, 5, -2, 8, -1];
console.log(firstNegativeIndex(array));  // Output: 2
