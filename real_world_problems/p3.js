// A robot can move in 4 directions: North, South, East, and West.
//  Use a switch statement to make the robot move in the direction entered by the user and
//  print the robot's new position after each movement.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});



let robotposition = {
    x: 0,
    y: 0
};

function robotMove(direction) {
    switch (direction) {
        case "north":
            robotposition.x++;
            console.log(`the robot moved north by ${robotposition.x},${robotposition.y}`);
            break;
            

            case "south":
                robotposition.x--;
                console.log(`the robot moved south by ${robotposition.x},${robotposition.y}`);
                break;

                
                case "east":
            robotposition.y++;
            console.log(`the robot moved east by ${robotposition.x},${robotposition.y}`);
            break;


        case "west":
            robotposition.y--;
            console.log(`the robot moved west by ${robotposition.x},${robotposition.y}`);
            break;

            default:
            console.log("Invalid direction");
            break;

    }
}



rl.question("Enter the direction:", (input) => {
    robotMove(input.trim().toLowerCase());
    rl.close();
});

