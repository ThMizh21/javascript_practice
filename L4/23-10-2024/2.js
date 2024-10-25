// Given a array of integers, count of number of occurrences of the maximum element in the array 

// Sample Input: 3 2 1 3

// Sample Output: 2

let int = [3,2,1,3];
let max= Math.max(...int)
let count = 0 ; 
for(let i=0;i<int.length;i++){
        if(max===int[i]){
            count++
        }
    }
    console.log(count)