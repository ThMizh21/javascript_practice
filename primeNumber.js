let num=72;


isPrime =true;

if(num<=1){
    isPrime=false;
}
else{
    for(i=2;i<=Math.sqrt(num);i++){
       if(num%i===0){
        isPrime=false;
       }  
    }
}

if(isPrime){
    console.log("Prime number");
}
else{
    console.log("not")
}
