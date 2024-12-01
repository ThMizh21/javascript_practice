// Matrix Multiplication using 2D Integer array

let a = [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]];
let b = [[3, 2, 1, 4], [3, 2, 1, 4], [3, 2, 1, 4]];

let m1 = a.length;      // Rows of matrix a
let m2 = a[0].length;   // Columns of matrix a (also rows of matrix b)
let n2 = b[0].length;   // Columns of matrix b

// Initialize result matrix with zeros
const result = Array.from({ length: m1 }, () => Array(n2).fill(0));

// Perform matrix multiplication
for (let i = 0; i < m1; i++) {
    for (let j = 0; j < n2; j++) {
        for (let k = 0; k < m2; k++) {
            result[i][j] += a[i][k] * b[k][j];
        }
    }
}

// Print the result
console.log(result);
    