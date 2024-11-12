// Implement the bubblesort algorithm for an array of objects in Javascript. The object is a Student object with name, age, mark.
//  Sort it by age. 

let student =[{Name: "Alice", Age: 20, Mark: 88},{Name:" Bob", Age: 22, Mark: 92},{Name: "Charlie", Age: 21, Mark: 75},{Name: "David", Age: 23, Mark: 84}];

for(let i=0;i<student.length;i++){
    for(let j=0;j<student.length-1;j++){
        let a = student[j];
        let b = student[j+1];
        if(a.Age>b.Age){
            student[j] = b;
            student[j+1] = a;

        }
    }
}
console.log(student);