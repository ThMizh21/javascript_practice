// Write code to print the below pattern, if n = 3
// 1             1

// 2 2       2 2

// 3 3 3 3 3 3

let n=3;
for(let i=1;i<=n;i++){
    let row = "";
    for(let j=0;j<i;j++){
        row+=i+" ";
    }

    let spaces= (n-i)*4;
    row+=" ".repeat(spaces);
     for(let k=0;k<i;k++){
        row+=i+" "
     }
     row+="\n"
     console.log(row);
}
