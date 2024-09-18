//  Write a program that takes an array of numbers and creates a new array with the square of each number
//  using the `map()` method.

let integers=[1,2,3,4,5,6,7,8,9,10];
let square = integers.map(function(num){
     return num*num;
});

console.log(square);

