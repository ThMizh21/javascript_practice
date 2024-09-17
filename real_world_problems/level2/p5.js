// Given the array water_levels = [30, 50, 20, 40, 60], where each element represents 
// the current water level in a tank, find the tank with the lowest water level.

tanks([30, 50, 20, 40, 60]);
function tanks(n) {
    let water_levels=n;
    
    let x=Math.min(...water_levels);
    let y= water_levels.indexOf(x);
    console.log("The Tank with lowest water level is "+y);
}
