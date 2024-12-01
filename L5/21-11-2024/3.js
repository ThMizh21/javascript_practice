// Given an array of integers, check if there are four elements in the array with given sum.

// Example:

// Input: arr = {10, 20, 30, 40, 1, 2}, target = 91
// Output: True
// Explanation: Sum of 20 + 30 + 40 + 1 = 91
function fourSum(arr, target) {
    arr.sort((a, b) => a - b); // Sort the array in ascending order
    
    const n = arr.length;
    
    // HashMap to store pairs of sums
    const pairsMap = new Map();
    
    // Iterate over all pairs of numbers
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            const currentSum = arr[i] + arr[j];
            const remainingSum = target - currentSum;
            
            // Check if the remaining sum exists in pairsMap
            if (pairsMap.has(remainingSum)) {
                const pairs = pairsMap.get(remainingSum);
                for (let pair of pairs) {
                    // Ensure that we don't reuse the same elements
                    if (pair[1] < i) {
                        console.log(`Found four elements: ${arr[pair[0]]}, ${arr[pair[1]]}, ${arr[i]}, ${arr[j]}`);
                        return true;
                    }
                }
            }
            
            // Store the current pair sum in pairsMap
            if (!pairsMap.has(currentSum)) {
                pairsMap.set(currentSum, []);
            }
            pairsMap.get(currentSum).push([i, j]);
        }
    }
    
    return false;
}

// Example usage
const arr = [10, 20, 30, 40, 1, 2];
const target = 91;
const result = fourSum(arr, target);
if (result) {
    console.log("Found four elements with the given sum.");
} else {
    console.log("No such four elements found.");
}
