// Given a year in the variable exampleYear, write a program to check whether it is a leap year or not.
// Print "Y" if it's a leap year and "N" if it's a common year.

exampleYear =2020;
 if(exampleYear%400===0){
    console.log("Y")
 }
 else if(exampleYear%4===0){
    console.log('Y')
 }

 else{
    console.log("N")
 }