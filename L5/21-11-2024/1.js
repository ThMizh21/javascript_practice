// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add 
// up to a specific target number. Output: 1 2

let target = 5;
let arr = [1,2,3,4,5,6,7,8,9];

let left = 0;
let right = arr.length-1;

while (left<=right){
    let sum = arr[left]+arr[right]
    if(sum === target ){
        console.log(arr[left],arr[right])
        break;
    }
    else if(sum>target){
        
        right--;
    }
    else{
        left++;
    }
}