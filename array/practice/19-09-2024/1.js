// You have an array of daily expenses for a week. Write a function that calculates the total expenses for
//  the week.

function dailyExpenses(n){
    
    let sum=0;
    for(i=0;i<dailyExpenses.length;i++){
        x=dailyExpenses[i];
        sum+=x
    }
    return sum;
}
console.log(dailyExpenses([100,134,226,76,90,46,72]))