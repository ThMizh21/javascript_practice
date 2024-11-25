// Add an element in an array, don't add if its already present. For eg in an array [5, 10, 3, 11, 18], 
// if we add 3 it should allow as the element is already there. 

let arr = [5, 10, 3, 11, 18];
let n = 21;
let isPresent = false;

for(let i=0;i<arr.length;i++){
    if(arr[i]===n){
       isPresent = true;
    }
}
if(!isPresent){
    arr.length++;
    arr[arr.length-1] = n;
    console.log(arr);
}

else{
    console.log("Element already present!");
}