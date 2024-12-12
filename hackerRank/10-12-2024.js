// https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true
function migratoryBirds(arr) {
    // Write your code here
    
    let map = new Map();
    
    for(let i=0;i<arr.length;i++){
        let num = arr[i]
        map.set(num,(map.get(num)||0)+1);
    }
    
    let maxCount = 0;
    let max = 0;
    for(let [key,value]of map){
        if(value > maxCount || (value === maxCount && key < max)){
            maxCount = value;
            max = key
        
        }
    }
    return max;

}

// https://www.hackerrank.com/challenges/day-of-the-programmer/problem?isFullScreen=true

function dayOfProgrammer(year) {
    // Write your code here
    if (year >= 1700 && year <= 1917) {
        if (year % 4 === 0) {
            return `12.09.${year}`;  
        } else {
            return `13.09.${year}`;  
        }
    }
    
    if (year === 1918) {
        return `26.09.1918`;
    }
    
    if (year >= 1919 && year <= 2700) {
        if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
            return `12.09.${year}`; 
        } else {
            return `13.09.${year}`;  
        }
    }

}   