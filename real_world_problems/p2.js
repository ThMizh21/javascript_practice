// A robot moves forward as long as its battery level is above 20%.
//  Using a while loop, simulate the robot's movement, decreasing the battery level by 5% after each step and displaying the remaining battery level.
//  Once the battery level is below 20%, Display Battery is low.
function robotMovement(n) {
    while (20<=n) {
        console.log("Battery Percentage :"+n+"%");
        n-=5;
        if (20>n) {
            console.log("Baterry is low.")
            
        }
    }
}
robotMovement(100);