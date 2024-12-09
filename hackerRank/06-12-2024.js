//  https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true 

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
     let n =0;
    if(x1 == x2 && v1 == v2){
        return "yes";
    }
    else if ((x1 - x2) % (v2 - v1) == 0 && (x1 - x2) / (v2 - v1) >= 0){
        return "YES";
    }
    
    else{
        return "NO";
    }

}

// https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true

function getTotalX(a, b) {
    // Write your code here
   let maxA = Math.max(...a);
    let minB = Math.min(...b);
    let count = 0;
    for (let x = maxA; x <= minB; x++) {
        let isMultipleOfA = a.every(aElem => x % aElem === 0);
        
        let isDivisorOfB = b.every(bElem => bElem % x === 0);
        
        if (isMultipleOfA && isDivisorOfB) {
            count++;
        }
    }

    return count;

}

// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true

function breakingRecords(scores) {
    // Write your code here
    let max_score = scores[0];
    let min_score = scores[0];
    let max_count = 0;
    let min_count = 0;
    for (let i = 1; i < scores.length; i++) {
        let score = scores[i];
        if (score > max_score) {
            max_score = score;
            max_count++;
        }
          if (score < min_score) {
            min_score = score;
            min_count++;
        }
    }

        return [max_count, min_count];

}

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