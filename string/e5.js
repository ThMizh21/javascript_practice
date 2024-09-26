// 5. Complete the program printAllMultiplesOf5Bet(a, b)
// eg, printAllMultiplesOf5Bet(10, 30) in reverse
// 30
// 25
// 20
// 15
// 10

function printAllMultiplesOf5Bet(a,b) {
    for(let i=b;i>=a;i-=5){
        console.log(i);
    }
}

printAllMultiplesOf5Bet(10,30)