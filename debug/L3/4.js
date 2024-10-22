// function printHollowSquare(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let j = 1; j <= n; j++) {
//             if (i === 1 || i === n ) {
//                 row += '*';
//             } else {
//                 row += ' ';
//             }
//         }
//         console.log(row);
//     }
// }

// // Example usage
// let n = 5;
// printHollowSquare(n);

function printHollowSquare(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n; j++) {
            if (i === 1 || i === n||j===1 ||j===n ) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
}

// Example usage
let n = 5;
printHollowSquare(n);