//Given the array soldiers = [120, 300, 250, 180, 150], where each element represents the number of soldiers 
// assigned to different regions, find the region with the highest number of soldiers.
function highsolider(n) {
    
    let soldiers = n
    
    let x =Math.max(...soldiers);
    let y=soldiers.indexOf(x)
    console.log(y);
}
highsolider([120, 300, 250, 180, 150]);