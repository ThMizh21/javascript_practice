// https://www.hackerrank.com/challenges/drawing-book/problem?isFullScreen=true

function pageCount(n, p) {
    // Write your code here
    let start = Math.floor(p / 2);
    let end = Math.floor(n / 2) - Math.floor(p / 2);

    return Math.min(start,end);
}   

// https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true
function countingValleys(steps, path) {
    // Write your code here
    let valley =0;
    let alt = 0;
    for(let i =0 ;i<steps;i++){
       if(path[i]==="U"){
        alt++;
       } 
       else if(path[i]==="D"){
        alt--;
       }

       
       if(alt===0 && path[i]==="U"){
        valley++
       
    }
    }
    return valley;

}