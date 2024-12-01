// Selection Sort

let arr = [1,13, 89, 15, 28,13,15, 1, 7];

let n = arr.length;

for (let i = 0; i < n - 1; i++) {
    // Assume the first element of the unsorted part is the smallest
    let minIndex = i;

    // Check the rest of the unsorted part for a smaller element
    for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex = j; // Update the index of the smallest element
        }
    }

    // Swap the smallest element with the first element of the unsorted part
    if (minIndex !== i) {
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

console.log(arr);

// line 5 : A loop runs till the end of the array.
// line 6 : A variable a holds the value of arr[i].
// line 7 : A loop starts with he value j=i+1 an its increases fro each iteration. 
// line 8 : a variable b hold thevalue of arr[j].
// line 9 : a condition checks whether a is greater than b if it is the program moves is line 10 else back to line 7.
// line 10 : b is mapped to arr[i].
// line 11 : a is mapped to ara[j].
// line 12 : a is mapped to arr[i].
// line 17 : arr is printed.
