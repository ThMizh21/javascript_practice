// function gcd(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b; 
//         a = b;  
//     }
//     return a;
// }

// // Example usage
// let a = 48, b = 18;
// console.log(gcd(a, b));  // Expected output: 6

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b; 
        a = temp;  
    }
    return a;
}

// Example usage
let a = 48, b = 18;
console.log(gcd(a, b)); 