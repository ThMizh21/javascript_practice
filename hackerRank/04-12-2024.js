// https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
function diagonalDifference(arr) {
    // Write your code here
    let a = 0;
    let b = 0;
    for(let i =0;i<arr.length;i++){
        a+=arr[i][i];
        b+=arr[i][arr.length-1-i];
    }
    let sub = Math.abs(a-b);
    return sub;
    

}

// https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true
function birthdayCakeCandles(candles) {
    // Write your code here
    let high = Math.max(...candles);
    let count=0;
    for(let i = 0;i<candles.length;i++){
       if(candles[i]===high){
        count++;
       } 
    }
       return count;
    

}
