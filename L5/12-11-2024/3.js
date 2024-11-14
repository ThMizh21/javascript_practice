// Implement it for an array of Employee objects which has name, age and salary. Sort it by Salary.

function Ssort(arr,n){
    for(let i=0;i<arr.length;i++){
        let a = arr[i];
    for(let j =i+1;j<arr.length;j++){
        let b = arr[j];
        if(a[n]>b[n]){
            arr[i] = b;
            arr[j] = a;
            a = arr[i];
        }
    }
}
console.log(arr);
}
    let arr= [
        { name: "Alice", age: 25, salary: 50000 },
        { name: "Bob", age: 30, salary: 60000 },
        { name: "Charlie", age: 28, salary: 55000 },
        { name: "David", age: 35, salary: 70000 },
        { name: "Eve", age: 22, salary: 48000 }
    ];
let n = "name";
Ssort(arr,n);