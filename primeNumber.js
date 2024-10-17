let arr = [88, 98, 76, 89, 67];

function isPrime(num) {
    if (num <= 1) return false;
    for (let j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (isPrime(num)) {
        console.log(num + " is prime");
    } else {
        console.log(num + " is not prime");
    }
}
