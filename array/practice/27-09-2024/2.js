// 2. Given an array of integers and 2 numbers a and b (a < b) count the number of elements in the array 
// which are between a and b

let arr=[2,3,4,15,26,55,24,97];
let a=10;
let b=50;
for(i=0;i<arr.length;i++){
    let c=arr[i];
    if(a<c && c<b){
        console.log(c);
    }
}