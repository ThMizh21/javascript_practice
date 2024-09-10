function sumNumbers(n) {
    let i=1;
    sum=0;
    while (i<=n) {
        sum +=i;
        i++;   
    }
     return sum;
}

let result=sumNumbers(5);
console.log(result);

