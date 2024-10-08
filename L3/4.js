// 4. Given 2 Numbers, find the GCD between the two numbers.

function GCD(a,b){
    let max=Math.min(a,b);
    while(max>0){
    if(a%max===0 && b%max===0){
        console.log(max);
        break;
    }
    max--;
}

}
GCD (10,8)