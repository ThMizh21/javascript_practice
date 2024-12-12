// https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true
function bonAppetit(bill, k, b) {
    // Write your code here
    let total =0
for(let i =0;i<bill.length;i++){
    if(i !=k){
    total += bill[i]
    }
}

let actual = total/2;

if(b === actual){
    console.log("Bon Appetit");
}
else{

    console.log( b -actual);
}
}

// https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true

function sockMerchant(n, ar) {
    // Write your code here
    
    let socks = new Map();
    
    for(let i =0;i<n;i++){
        let sock = ar[i];
        socks.set(sock,(socks.get(sock)||0)+1);
    }
    let count =0;
    socks.forEach(value =>{
        count += Math.floor( value/2);
    });

    return count;
    
}
