// The co-prime number definition tells us that if the Greatest Common Factor (GCF) of any two numbers is 1, then they are said to be co-prime. Given two numbers a and b print if they are "co-prime" or "Not a co- prime"
// For example:
// Test
// Result
// areCoPrime (8, 15) co-prime
// areCoPrime (12, 18) Not a co-prime

function coPrime(a,b) {
    let x= gcd(a,b);
    if(x===1){
       console.log("Co-Prime");
    }
    else{
        console.log("Not Co-Prime");
    }
    
}

function gcd(m,n){
    let min=Math.min(m,n);
     for(i=min;i>0;i--){
        if(m%i===0 && n%i===0){
            return i;
        }
     }
}

coPrime(12,18);