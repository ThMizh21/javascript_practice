// 2. Implement the algorithm for an array of Strings

let arr = ["banana", "apple", "cherry", "date", "fig", "grape"];

for(let i=0;i<arr.length;i++){
    let a = arr[i];
    for(let j=i+1;j<arr.length;j++){
        let b = arr[j];
        if(a>b){
            arr[j] = a;
            arr[i] = b;
            a = arr[i];
        }
    }
}
console.log(arr);