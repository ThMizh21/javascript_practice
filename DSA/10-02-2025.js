// merging two sorted arrays to make it a single sorted array

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [1, 2, 4, 6, 8, 10];
let arr = [];

let i = 0;
let j = 0;

while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
        arr.push(arr1[i]);
        i++;
    } else {
        arr.push(arr2[j]);
        j++;
    }
}

while (i < arr1.length) {
    arr.push(arr1[i]);
    i++;
}

while (j < arr2.length) {
    arr.push(arr2[j]);
    j++;
}

console.log(arr);