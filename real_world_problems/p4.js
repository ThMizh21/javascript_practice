// An airplane altitude currently is 1000ft and its altitude reduces each second by 10ft. 
// Write a program which will print “Flight arrived” when the airplane altitude reaches 0ft.
 function flightArrival(n) {
    
    while(n>=0){
        if(n===0){
            console.log("Flight Arrived");
        }
        n-=10;
    }
    

 }
flightArrival(1000);