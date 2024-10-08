// 3. Given a 2 numbers, find the LCM between the two numbers. 

function LCM(a,b) {
   let max =Math.max(a,b)
    while(max>0){
    if(max%a===0 && max%b===0){
        console.log(max+" is the LCM OF "+a+ " and "+b)
        break;

    }
    max++
}
}

LCM(8,5)