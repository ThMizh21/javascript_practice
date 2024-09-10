function printEvenNumbers(n) {
    i = 1

    while (i <= n) {
        if (i % 2 === 0) {
            console.log(i);
        }
         i++;
    }

}

printEvenNumbers(9)