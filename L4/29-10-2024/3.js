// Difficulty Level: Tough
// Write a program that takes a sequence of numbers as input and computes a new sequence by finding the LCM of every two consecutive numbers in the original sequence. Repeat this process until the sequence reduces to a single number. This final number is the answer.
// Input: [3, 5, 7, 15, 9]
// Step 1:
// LCM(3, 5) = 15
// LCM(5, 7) = 35
// LCM(7, 15) = 105
// LCM(15, 9) = 45
// New Array: [15, 35, 105, 45]
// Step 2:
// LCM(15, 35) = 105
// LCM(35, 105) = 105
// LCM(105, 45) = 315
// New Array: [105, 105, 315]
// Step 3:
// LCM(105, 105) = 105
// LCM(105, 315) = 315
// New Array: [105, 315]
// Step 4:
// LCM(105, 315) = 315
// New Array: [315]
// Final Output: 315


function LCM(a, b) {
    let max = Math.max(a, b);
    while (true) {
        if (max % a === 0 && max % b === 0) {
            return max;
        }
        max++;
    }
}

function first(arr) {
    while (arr.length > 1) {
        let newArr = [];
        for (let i = 0; i < arr.length - 1; i++) {
            let a = arr[i];//i=0
            let b = arr[i + 1];//0+1
            let lcm = LCM(a, b);
            newArr.push(lcm);
        }
        arr = newArr;
        // console.log("New Array:", arr);
    }
    return arr[0];
}

const result = first([3, 5, 7, 15, 9]);
console.log("Final Output:", result);


