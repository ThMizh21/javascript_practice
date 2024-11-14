// Selection Sort

let arr = [1,13, 89, 15, 28,13,15, 1, 7];

for(let i=0 ;i < arr.length;i++){
    let a = arr[i];
   for(let j=i+1 ;j<arr.length;j++){
    let b= arr[j];
    if(a > b){
        arr[i] = b;
        arr[j] = a;
        a = arr[i];
    }
   }
    
}
console.log(arr);

