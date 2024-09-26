// 3. Write a function printMultiplicationTable that takes a number n, range r and prints the multiplication table for that number in reverse order.

function printMultiplicationTable(n,r){
    
    for(i=1;i<=r;i++){
        let product=n*i;
        console.log(`${n}*${i}=${product}`);

    }
}


printMultiplicationTable(5,10);
