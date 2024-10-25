// Given an array of strings arr and another string s, check if s in present in arr

function strCheck(str,s) {
    
    let x = fruits.indexOf(s);
    if(x!==-1){
        console.log("S present in the Array.")
    }
    else{
        console.log("S does not present in the Array.")
    }
}
let fruits = ["apple", "banana", "cherry", "mango", "orange", "kiwi", "pineapple", "grape", "strawberry", "blueberry"];
 let s = "apple";

strCheck(fruits,s);