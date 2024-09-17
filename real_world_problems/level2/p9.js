// Given the array students_per_route = [45, 55, 30, 60, 40], where each element represents the number of students
//  assigned to different bus routes, calculate the total number of buses required if each bus can hold a maximum
//  of 50 students.

busRequired([45, 55, 30, 60, 40,]);
function busRequired(n) {
    let students_per_route =n;
    let sum =0;
    for(i=0;i<students_per_route.length;i++){
        let y=students_per_route[i];
        sum=sum+y;
    }
    let bus=sum/50;
    let z=Math.ceil(bus);
    console.log("Number of buses required: "+z);
}
