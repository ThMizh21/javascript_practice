// Print the different between the maximum and minimum element in a given array. 
let int = [21,2,3,43,54,65,5,317,57,65,68];
let sorted = int.sort((a,b)=>a-b);
let a = sorted[sorted.length-1];
let b = sorted[0];
let dif = a-b;
console.log(dif)