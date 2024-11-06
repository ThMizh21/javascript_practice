// Given an array find all the values less than 15 in a new array if not print No Element less than 15.
//   Example if arr = [4, 15, 8, 25, 30] output is 4, 8. if ar = [19, 89, 90, 18] output No element
//  less than 15

let arr = [4, 15, 8, 25, 30];
let newArr =[];
for(let i=0;i<arr.length;i++){
    let a = arr[i];
    if(a<15){
     newArr.push(a);
    }
}

if(newArr.length<0){
    console.log(" No Element less than 15.")
}
else{
    console.log(newArr)
};