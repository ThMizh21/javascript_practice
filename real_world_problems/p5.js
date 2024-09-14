// Based on the flight’s destination, direct the airplane to a specific runway.
// Use a switch statement to assign the runway depending on the destination entered by the user.
    let destination = "Chennai";
    switch (destination){
        case "Chennai":
            console.log("Runway 1");
            break;

            case "Trichy":
                console.log("Runway 2");
                break;

                case "Madurai":
                    console.log("Runway 3");
                    break;

                    default:
                        console.log("Invalid Destination");
                        break;

    }