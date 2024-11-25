// Given an two arrays, given to Set Intersection on the two arrays. 
// For [3, 1, 5, 7, 8] and [5, 1, 8, 10, 11]. Result [1, 5, 8]

let arr1 =  [3, 1, 5, 7, 8];
 let arr2 =  [5, 1, 8, 10, 11];
 let arr = [...arr1,...arr2];
 let inter =[];

 for(let i= 0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
          inter.push(arr[j])
        }
    }
 }
 console.log(inter);