let arr= [
    { name: "Alice", age: 25, salary: 50000 },
    { name: "Bob", age: 30, salary: 60000 },
    { name: "Charlie", age: 28, salary: 55000 },
    { name: "David", age: 35, salary: 70000 },
    { name: "Eve", age: 22, salary: 48000 }
];
let n= arr.length;

let gap = Math.floor(n/2);
while(gap>0){
for(let i=gap;i<n;i++){
    let temp = arr[i];
    let idx =i;
    while(idx>=gap && arr[idx-gap].age>temp.age){
        arr[idx] = arr[idx-gap];
        idx -=gap;
    }
    arr[idx] = temp;
}
gap=Math.floor(gap/2);
}
console.log(arr);