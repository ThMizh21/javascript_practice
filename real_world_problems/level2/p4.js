// Given the array populations = [50, 60, 70, 80, 90], where each element represents the population of
//  an Indian state over the last 5 years, calculate the average population.

function averageOfPopulation(n) {
    
    let populations = n
    let sum=0;
    for(i=0;i<populations.length;i++){
        let x=populations[i];
        sum+=x;
    }
    let average=sum/populations.length;
    console.log(average);
}

averageOfPopulation([50, 60, 70, 80, 90,]);