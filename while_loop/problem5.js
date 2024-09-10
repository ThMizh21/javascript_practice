function calculateFactorial(n) {
    let i = 1;
    let factorial = 1;
    while (i <= n) {
        factorial *= i;
        i++;
    }
    console.log(factorial);

}

calculateFactorial(5); 