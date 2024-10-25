// The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, the next term is defined as the sum of the previous two terms.
// The recurrence relation defines the sequence Fn of Fibonacci numbers:
// FnFn-1 + Fn-2 with seed values F1 = 0 and F2 = 1
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// fibonacci(1) = 0;
// fibonacci(4) = 2;
// fibonacci(6) = 5;

function fibbonacciSequence(n){
     let a=0;
     let b=1;
     let sum =0;
     if(n===1){
        console.log("0")
     }

     else if(n===2){
        console.log("1")
     }
     for(let i=3;i<=n;i++){
        let c=a+b;
        sum+=c;
        a=b;
        b=c;
     }
     console.log(sum);
}

fibbonacciSequence(5)