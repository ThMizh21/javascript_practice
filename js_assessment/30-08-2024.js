let a=5;
let b=2;
c=a+b;
d=a-b;
e=a*b;
f=a/b;
g=a%b;
h=a**b;
console.log(c,d,e,f,g,h)

let P=12500;
let A=15500;
let T=4;
SI=A-P;
let R=(SI*100)/(P*T)
console.log("Rate of interest is"+" "+ R+"%");

let fuelrate=20;
let flightdurationHrs=3;
let flightdurationmins=30;
let toatalflightdurationmins=(flightdurationHrs*60)+(flightdurationmins)
let totalfuelconsumed=(fuelrate*toatalflightdurationmins)
console.log("Total fuel consumed: "+totalfuelconsumed)

let No_Of_Movies=4;
let Break_mins=15;
let Movie_Runtime_In_Hrs=2;
let Total_Movie_Runtime=(No_Of_Movies*Movie_Runtime_In_Hrs);
let Total_Break=(Break_mins*3);
console.log(Total_Movie_Runtime+"h "+ Total_Break+"m");
