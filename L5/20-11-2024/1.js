// Matrix Addition using 2d Integer array

let a= [[1,2,3],
        [1,2,3],
        [1,2,3],
        [1,2,3]];

let b= [[3,2,1],
        [3,2,1],
        [3,2,1],
        [3,2,1]];

let n = a.length;
let m = a[0].length;

let c = Array.from({length:n}, () => Array(m));
 for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
        c[i][j] = a[i][j]+b[i][j];
    }
 }

 console.log(c)

 c.forEach(row => {
    console.log(row.join(" "))
 });