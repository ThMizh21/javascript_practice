// Implement the bubblesort algorithm for an array of integers

let arr = [89,32,34,54,6,90,12,5];
let isSwap;

for(let i=0;i<arr.length;i++){
    isSwap = false;
    for(let j=0;j<arr.length-1-i;j++){
        if(arr[j]>arr[j+1]){
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            isSwap = true;
        }
    }
    if(!isSwap){
        break;
    }
}
console.log(arr)


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