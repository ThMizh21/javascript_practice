// Inverse of a Matrix using 2D array
let M =[[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]];
let len = M.length;
console.log(M);
for(let i=0;i<len;i++){
    for(let j=0;j<M[i].length;j++){
        if(i===j){
            let temp = M[i][j];
            M[i][j]=M[(len-1)-i][(len-1)-j];
            M[(len-1)-i][(len-1)-j] =temp
        }
        else{
            M[i][j]=-M[i][j]
        }
    }
}

console.log(M);