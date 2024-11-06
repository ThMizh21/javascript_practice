// Given a array of string return the String which has the maximum length. arr = ["Ram", "Abraham", "Peter"] output is Abraham;

let arr = ["Ram", "Abraham", "Peter"];
let c = arr[0];  

for (let i = 1; i < arr.length; i++) {  
    let a = c;  
    let b = arr[i];  

    if (b.length > a.length) {
        c = b; 
    }
}

console.log(c);  
