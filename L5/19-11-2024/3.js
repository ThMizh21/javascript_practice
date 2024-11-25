// Given an two arrays, given to Set Union on the two arrays. For [3, 1, 5, 7, 8] and [5, 1, 8, 10, 11]. 
//  Result [3, 1, 5, 7, 8, 10, 11]

 let arr1 =  [3, 1, 5, 7, 8];
 let arr2 =  [5, 1, 8, 10, 11];
 let arr = [...arr1,...arr2];

 for(let i= 0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){

            for(let k=j;k<arr.length-1;k++){
                arr[k]=arr[k+1];
            }
            arr.length--;
            j--;
        }
    }
 }
 console.log(arr);