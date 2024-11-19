// Implement the bubblesort algorithm for an array of integers

let arr = [8,42, 17,  33, 59];
let count =0;
let isSwap = false ;
for(i=0;i<arr.length;i++){
    count++
    for(j=0;j<arr.length-1;j++){
    let a = arr[j];
    let b = arr[j+1];
    if(a>b) {
     arr[j] = b;
     arr[j+1] = a;
     isSwap = true;
    }
}
if(isSwap === false){
    break;
}
    
}
console.log(arr);
console.log(count);


// line 4 : a boolean variable is define as false to terminate the loop if there is no swap happens.
// line 5 : a loop starts from 0 and run till the end of the arr.
// line 6 : a second loop inside the first loop which ends before the length of the arr.
// line 7 : a variable a is define arr[j] is mapped to it. 
// line 8 : a variable b is define arr[j+1] is mapped to it.
// line 9 : a condition checks whether a is greater than b if it is the program moves is line 10 else back to line 6.
// line 10 : b is mapped to arr[j].
// line 11 : a is mapped to ara[j+1].
// line 12 : the boolean isSwap is changed to true.
// line 15 : check if the the condition is true if ten back to line 5;
// line 16 : The program is terminated from running .
// line 20 : The arr is printed.