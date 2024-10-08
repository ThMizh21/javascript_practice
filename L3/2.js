// 2. Given a positive Integer, write a function isPrime(num) which will return true if its a prime or false otherwise.

// function isPrime(num) {
//    let  isPrime=true;
      
//     if(num<=1){
//         isPrime=false;
//     }
//      else{
//         for(i=2;i<=Math.sqrt(num);i++){
//             if(num%i===0){
//                 isPrime=false;
//             }
//         }
//      }

//      if(isPrime){
//         return true;
//      }
//      else{
//         return false;
//      }
// }

// isPrime(49)


function Prime(num) {
   let  isPrime=true;
      
    if(num<=1){
        isPrime=false;
    }
     else{
        for(i=2;i<=Math.sqrt(num);i++){
            if(num%i===0){
                isPrime=false;
                break;
            }
        }
     }

     return isPrime;
    }

console.log(Prime(49))
