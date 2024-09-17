// function isMultipleOfSeven(N) {
//     if (N / 6 === 0) { 
//         console.log("No");
//     } else {
//         console.log("YES");
//     }
// }

function isMultipleOfSeven(N) {
    if (N %7 === 0) { 
        console.log("Yes");
    } else {
        console.log("No");
    }
}

let N = 49;
isMultipleOfSeven(N);