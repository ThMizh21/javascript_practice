// 17. Write a program where an airplane climbs to a specific altitude(say 1000ft) over 10 intervals. Use a for loop to display the altitude 
// after each interval.

 
let n=10;
let altitude =0;
for(i=1;i<=n;i++){
    altitude+=100;
 console.log( "The altitude is "+altitude+"ft");
}