// Function to calculate the determinant of a 2D matrix
function determinant(matrix) {
    const n = matrix.length;
    if (n === 2) {
        // 2x2 matrix determinant formula
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }

    let det = 0;
    for (let i = 0; i < n; i++) {
        det += matrix[0][i] * cofactor(matrix, 0, i);
    }
    return det;
}

// Function to calculate the cofactor of a matrix element
function cofactor(matrix, row, col) {
    const subMatrix = matrix.filter((r, i) => i !== row).map(r => r.filter((_, j) => j !== col));
    return Math.pow(-1, row + col) * determinant(subMatrix);  // Apply sign based on position
}

// Function to calculate the inverse of a matrix
function inverse(matrix) {
    const n = matrix.length;
    const det = determinant(matrix);
    if (det === 0) throw new Error("Matrix is singular and cannot be inverted.");

    // Create the inverse matrix using the adjugate matrix (transpose of cofactors)
    let inverseMatrix = Array.from({ length: n }, (_, i) => 
        Array.from({ length: n }, (_, j) => cofactor(matrix, j, i) / det)
    );

    return inverseMatrix;
}

// Example: 3x3 matrix
let mat = [
    [4, 7, 2],
    [3, 5, 1],
    [2, 6, 3]
];

try {
    let invMat = inverse(mat);
    console.log("Inverse Matrix:");
    console.log(invMat);
} catch (e) {
    console.error(e.message);
}
