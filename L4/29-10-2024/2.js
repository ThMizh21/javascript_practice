// 2. Problem: Given an array of integers and a target element, find the indices of its first and last occurrence.

// Example Input: ([5, 2, 3, 5, 7, 5, 8], 5)
// Example Output: { firstIndex: 0, lastIndex: 5 }

let arr = [5, 2, 3, 5, 7, 5, 8];
let n = 5
let newArr = [];
for(let i=0;i<arr.length;i++){
    if(n===arr[i]){
     newArr.push(i)
    }
}
console.log(`{firstIndex: ${newArr[0]}, lastIndex: ${newArr[newArr.length-1]}}`)