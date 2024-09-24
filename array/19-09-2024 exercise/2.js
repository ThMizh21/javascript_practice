// Add the above code in a function digitSum(num) . It should return the sum of the digits of the number.

function sum(int) {
    
    let sum=0;
    while(int>0){
        let x = (int % 10);
        sum+=x;
        int = Math.floor(int/10);
    }
    console.log(sum);
}

sum(3458978);
