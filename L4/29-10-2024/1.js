// 1. Problem: Given an array of integers, count how many numbers are even and how many are odd.

// Example Input: [1, 2, 3, 4, 5, 6]
// Example Output: { even: 3, odd: 3 }

let int =  [1, 2, 3, 4, 5, 6];
let even =0;
let odd = 0;
for(i=0;i<int.length;i++){
 if(int[i]%2===0){
    even++;
 }
 else{
    odd++
 }
}

console.log(`{even:${even}, odd: ${odd}}`)