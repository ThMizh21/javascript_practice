// Given the array train_departures = [10, 15, 7, 20, 5], where each element represents the departure time of a
//  train in 24-hour format, find the earliest train to depart.

function traintiming(n) {
    let train_departures = n;
    let earliest_departure= Math.min(...train_departures)
    console.log("The earliest train departure is at "+earliest_departure);
}

traintiming([10, 15, 7, 20, 5]);