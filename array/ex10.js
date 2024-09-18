//     Write a program that multiplies each element of an array by 2 using `map()` and prints the new array.

let no=[1,2,3,4,5];
let multiply=no.map(function(num){
    return num*2;
});

console.log(multiply);