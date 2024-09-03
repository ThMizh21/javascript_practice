// Even or Odd Number
let num=4;
add(num);
let num1=5;
add(num1);
 function add(num){
    if(num % 2=== 0){
    console.log("even");
}
 else {
    console.log("not even");
}
}
// Match Declaration
let teamScore=150;
let targetScore=145;
let oversleft=0;
declare(teamScore,targetScore,oversleft);
function declare(teamScore,targetScore,oversLeft) {
    

if (teamScore>=targetScore){
    console.log("Team wins by DL method");
}
else if(teamScore<targetScore && oversLeft>0){
    console.log("Match to be continued");
}
else if(teamScore<targetScore && oversLeft==0){
    console.log("Team loses by DL method");
}
}

// Leap Year
 let a=2000;
leap(a)
 function leap(a) {
    
 
 if ((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0) {
    console.log("Y");
} else {
    console.log("N");
}
 }