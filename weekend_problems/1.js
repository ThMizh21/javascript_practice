// Write a JavaScript function classifyNumber that accepts a number and returns a string based on the following rules:
// If the number is divisible by 3, return "Divisible by 3".
// If the number is divisible by 5, return "Divisible by 5".
// If the number is divisible by both 3 and 5, return "Divisible by both 3 and 5".
// If the number is neither divisible by 3 nor 5, return "Not divisible by 3 or 5".

function classifyNumber(n) {
     if (n%3===0 && n%5===0){
         console.log("Divisible by both 3 and 5");
     }

         else if(n%3===0){
             console.log("Divisible by 3");
             
         }
         else if (n%5===0){
             console.log("Divisible by 5");
         }
         else if (n%5!==0 || n%3!==0){
             console.log("Not divisible by 3 or 5");
         }
        
    
    
}

classifyNumber(7);