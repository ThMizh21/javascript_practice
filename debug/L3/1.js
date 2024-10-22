// function printTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let j = 1; j <= n; j--) { 
//             row += '*';
//         }
//         console.log(row);
//     }
// }

// // Example usage
// let n = 5;
// printTriangle(n);

function printTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) { 
            row += '*';
        }
        console.log(row);
    }
}

// Example usage
let n = 5;
printTriangle(n);

// function printTriangle(n) {
//     for (let i = n; i >=1; i--) {
//         let row = '';

//         for (let j = 1; j <= n-i+ 1; j++) { 
//             row += '*';
//         }
//         console.log(row);
//     }
// }

// // Example usage
// let n = 5;
// printTriangle(n);