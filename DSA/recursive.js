// function factorial(n) {
//     if (n < 0) {
//         return -1;
//     }
//     if(n === 0 || n == 1) {
//         console.log(n);
//         return 1;
//     }
//     else {
//         let result =  n * factorial (n -1);
//         console.log(result);
//         return result;
//     }
// }

// result = factorial(5);
// console.log(result);


// function recurivePattern(n){
//     if(n<=0){
//         return ;
//     }
//     else{
//         console.log( pattern(n));
//         recurivePattern(n-1);   
//     }

    
// }

// function pattern(n){
//     if(n<=0){
//         return"";
//     }
//     else{
//         return "*"+pattern(n-1);
//     }    
// }

// recurivePattern(5);
// pattern(5);


// function printPattern(n, current = 1) {
//     if (current > n) {
//         return;
//     } else {
//         console.log(Row(current));
//         printPattern(n, current + 1);
//     }
// }

// function Row(length, row = "") {
//     if (length <= 0) {
//         return row;
//     } else {
//         return Row(length - 1, row + "*");
//     }
// }

// printPattern(5);

function printPattern(n, current = 1, row = "") {
    if (current > n) {
        return;
    } else {
        if (row.length < current) {
            row += "*";
            printPattern(n, current, row);
        } else {
            console.log(row);
            printPattern(n, current + 1);
        }
    }
}

printPattern(5);