//Given an array of strings, return the string which has maximum 'a' character present in it. 
// eg = ["apple", "appeal", "after", "banish"] output is appeal as it has 2 a's in it


function mostCount(arr) {
    let maxcount = 0;
    for (let word of arr) {
        let acount = 0;
        for (let letter of word) {
            if (letter === 'a') {
                acount++;
            }
        }

        if (acount > maxcount) {
            maxcount = acount;

        }
        
    }
    return maxcount;
}
let arr = ["apple", "appeal", "after", "banish"];
console.log(mostCount(arr));