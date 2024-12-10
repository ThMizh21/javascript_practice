// https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true

function birthday(s, d, m) {
    // Write your code here
    let count = 0;
    let currentSum = 0;

    for (let i = 0; i < m; i++) {
        currentSum += s[i];
    }

    if (currentSum === d) {
        count++;
    }

    for (let i = 1; i <= s.length - m; i++) {
        currentSum = currentSum - s[i - 1] + s[i + m - 1];

        if (currentSum === d) {
            count++;
        }
    }

    return count;

}

// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true
function divisibleSumPairs(n, k, ar) {
    // Write your code here
    
     let count = 0;
    let remainderCount = new Array(k).fill(0); 
    for (let i = 0; i < n; i++) {
        let remainder = ar[i] % k;

        if (remainder === 0) {
            count += remainderCount[0]; 
        } else {
            
            count += remainderCount[k - remainder];
        }

        remainderCount[remainder]++;
    }

    return count;

}
