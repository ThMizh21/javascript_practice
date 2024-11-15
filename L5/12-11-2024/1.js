// Selection Sort

let arr = [1,13, 89, 15, 28,13,15, 1, 7];

for(let i=0 ;i < arr.length;i++){
    let a = arr[i];
   for(let j=i+1 ;j<arr.length;j++){
    let b= arr[j];
    if(a > b){
        arr[i] = b;
        arr[j] = a;
        a = arr[i];
    }
   }
    
}
console.log(arr);

// line 5 : A loop runs till the end of the array.
// line 6 : A variable a holds the value of arr[i].
// line 7 : A loop starts with he value j=i+1 an its increases fro each iteration. 
// line 8 : a variable b hold thevalue of arr[j].
// line 9 : a condition checks whether a is greater than b if it is the program moves is line 10 else back to line 7.
// line 10 : b is mapped to arr[i].
// line 11 : a is mapped to ara[j].
// line 12 : a is mapped to arr[i].
// line 17 : arr is printed.
