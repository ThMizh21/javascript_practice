// Implement the bubblesort algorithm for an array of integers

let arr = [42, 17, 8, 33, 59];

for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length-1;j++){
    let a = arr[j];
    let b = arr[j+1];
    if(a>b) {
     arr[j] = b;
     arr[j+1] = a;
    }
    

}
    
}
console.log(arr);


