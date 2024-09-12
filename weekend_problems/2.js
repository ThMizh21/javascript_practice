// 2. Write a JavaScript function getDayName that takes a number (from 1 to 7) and returns the corresponding day of the week

function getDayName(n){
    switch (n){
        case 1:
            console.log("Monday");
            break;
            case 2:
                console.log("Tuesday");
                break;
        case 3:
            console.log("Wednesday");
            break;
            case 4:
                console.log("Thursday");
                break;
        case 5:
            console.log("Friday");
            break;
            case 6:
                console.log("Saturday");
                break;
            case 7:
                console.log("Sunday");
                break;
                default:
                    console.log("Invalid day")
                    break;
    }
}

getDayName(7);