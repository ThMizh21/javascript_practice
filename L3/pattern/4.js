let n='3';


for (let i = 1; i <= n; i++) {
    let a=''

  
    for (let k = 1; k <= i; k++) {
        a += i; 
        if (k < i) {
            a += '';
        }
    }

    console.log(a); 
}
