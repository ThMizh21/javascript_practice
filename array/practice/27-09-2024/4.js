// 4. Given an array of float find the average of the numbers.

let float=[8.21,9.2,89.3,67.12,78.00];
let sum =0;
let len = float.length;
for(let i=0;i<len;i++){
    let a =float[i];
    sum+=a;
}
let avg = sum/len;
console.log(avg.toFixed(2));