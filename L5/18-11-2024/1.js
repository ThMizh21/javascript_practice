// L5 create a new array after Deleting or inserting an item at kth index. Do this for an array of integers and Strings

let arr = [1, 2, 3, 4, 5];
let removeIdx = 2;

for (let i = removeIdx; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];  
}

// arr.length--;  

console.log(arr);
// let arr = [1, 2, 3, 4, 5];
// let addIdx =2;
// let value = [67,23];
//  arr.length+=value.length;
//  for(let i= arr.length-1;i>addIdx;i--){
//     arr[i]=arr[i-value.length];
//  }
//  for(let i=0;i<value.length;i++){
//     arr[addIdx+i]=value[i]
//  }
//  console.log(arr)
