//  Create an array of 10 numbers. Write a program to filter out only the odd numbers and print them.

let integers=[1,2,3,4,5,6,7,8,9,10];
let odds=integers.filter(function(odd){
    return odd % 2!==0;
})
console.log(odds);