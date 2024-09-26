// 4. If the initialDiscount is 5% and the dailyIncrease is 2%, the function should calculate the total discount
//  over 10 days.
// Day 1: 5%
// Day 2: 7% (5% + 2%)
// Day 3: 9% (7% + 2%)
// ...
// Day 10: Calculate this using a loop.
// Remember, you don't have to store each day's discount. Just keep a running total of the discount percentage. 
// The challenge is to use a single loop to accumulate the total discount percentage over the 10 days.

let initialDiscount=5;
 
for(i=1;i<=10;i++){
    initialDiscount+=2;
}
console.log(initialDiscount+"%");