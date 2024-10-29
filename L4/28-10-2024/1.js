// Find the second maximum in an array of integers

let int = [21,2,3,43,54,65,5,317,57,65,68];
let sorted = int.sort((a,b)=>b-a);
console.log("The second maximum integer is :" + sorted[1]);