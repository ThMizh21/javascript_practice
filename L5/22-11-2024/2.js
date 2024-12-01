// Given an array of Integers identify the maximum occurring element. Eg: 
// [5,5,4,1,1,1,6,7,8], answer is 1

function findMaxOccurringElement(arr) {
    let frequencyMap = new Map();  // A map to store the frequency of each element
    
    // Traverse through the array and count frequencies
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);  // Update frequency
    }

    let maxCount = 0;  // To store the highest frequency
    let maxElement;    // To store the element with the highest frequency
    
    // Traverse the frequencyMap to find the element with the highest count
    for (let [key, value] of frequencyMap) {
        if (value > maxCount) {
            maxCount = value;
            maxElement = key;
        }
    }

    return maxElement;
}

// Example usage
const arr = [5, 5, 4, 1, 1, 1, 6, 7, 8];
const result = findMaxOccurringElement(arr);
console.log(result);  // Output: 1
