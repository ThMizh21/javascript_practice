// https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true
function timeConversion(s) {
    // Write your code here
    let time = s.slice(0,s.length-2);
    let period = s.slice(s.length-2,s.length);
    
    let [hours,minutes,seconds] = time.split(":"); 
    
    if(period == "PM"){
    hours = parseInt(hours);
      if(hours !== 12 ){
      hours+=12; 
        
      }
        }
    else{
        if(hours == "12"){
            hours= "00";
        }
      hours= hours.toString();
        
    }
    let militaryT = [hours,minutes,seconds].join(":")
    return militaryT;

}

// https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true
function gradingStudents(grades) {
    // Write your code here
    let upGrade =[]
    for(let i =0 ;i<grades.length;i++){
        let grade = grades[i]
  if(grade <38){
      upGrade.push(grade);
  }
  else {
      let multiFive = Math.ceil(grade/5)*5;
      let dif = multiFive - grade ;
      if(dif <3){
          upGrade.push(multiFive);
      }
      else {
          upGrade.push(grade);
      }
  }
    }
    return upGrade;
}

// https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let apple = 0;
    let orange = 0;
    for(let i =0;i<apples.length;i++){
        let appleLanding =apples[i]+=a;
        if(appleLanding<=t && appleLanding>=s){
            apple++;
        }
    }
    for(let j=0;j<oranges.length;j++){
        let orangeLanding = oranges[j]+=b;
        if(orangeLanding<=t && orangeLanding>=s){
            orange++;
        }
    }
    console.log(apple);
    console.log(orange);

}

// https://www.hackerrank.com/challenges/extra-long-factorials/problem?isFullScreen=true
function extraLongFactorials(n) {
    // Write your code here
    
    let fact =BigInt(1);
    for(let i=BigInt(n);i>0;i--){
        fact*=i;
    }
    console.log(fact.toString());

}

// https://www.hackerrank.com/challenges/flatland-space-stations/problem?isFullScreen=true
function flatlandSpaceStations(n, c) {

    c.sort((a,b) => a-b);
    
    let maxD =c[0];
    maxD = Math.max(maxD,n-1-c[c.length-1]);
    
    for(let i =0;i<c.length-1;i++){
        let d = Math.floor((c[i+1]-c[i])/2);
         maxD = Math.max(maxD,d);
    }
    return maxD;
    
    }