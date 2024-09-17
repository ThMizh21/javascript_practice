// Given the array temperatures = [75, 80, 72, 85, 90], where each element represents the temperature
//  in a specific region of a forest, identify which regions have temperatures above 80 degrees.

highTemp([75, 80, 72, 85, 90]);
function highTemp(n) {
    let temperatures = n;
    
    for(i=0;i<temperatures.length;i++){
        let x=temperatures[i]
        if(x>80){
            y=temperatures.indexOf(x);
            console.log("region have temperature above 80 is "+y);
        }
    }
}
    