// Given a number of 7 digits, print the sum of the digits of the number.

let int= 3458978;
let sum=0;
while(int>0){
  let x = (int % 10);
    sum+=x;
    int = Math.floor(int/10);
}
console.log(sum);
