// // Given an array of Integers, remove all the duplicates eg: [3, 4, 1, 5, 1, 9, 3] output [3, 4, 1, 5, 9]

let arr = [3, 4, 1, 5, 1, 9, 3];
// let seen = new Set(arr);
// console.log(arr);

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
         
            for (let k = j; k < arr.length - 1; k++) {
                arr[k] = arr[k + 1];  
            }

            arr.length--;  
            j--
        }        
    }
}
console.log(arr);

