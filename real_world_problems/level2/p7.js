// Given the array landing_times = [12, 15, 12, 18, 20], where each element represents the time a helicopter
//  is scheduled to land, check if any two helicopters are scheduled to land at the same time.

helicoperLanding([12, 15, 12, 18, 20]);
function helicoperLanding(n) {
    landing_times = n;
    
    let timing= new Set(landing_times);
    if(timing.length<landing_times.length){
        console.log("There are no helicopter lands in same time.");
    }
    
    else{
        console.log("There are helicopters landing in same time.")
    }
}