// Given the array days_until_festival = [30, 15, 45, 10, 25], where each element represents the number of 
// days left until an important festival, find the closest upcoming festival.

function nearByFestival(n) {
    
let days_until_festival = n
    let x=Math.min(...days_until_festival);
    let y=days_until_festival.indexOf(x);
    console.log(y);
}

nearByFestival([30, 15, 45, 10, 25]);