// Implement the bubblesort algorithm for an array of strings

let arr = ["banana", "apple", "cherry", "date", "fig", "grape"];
let swap ;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-1;j++){
        let a = arr[j];
        let b = arr[j+1];
        if(a.toLowerCase() > b.toLowerCase()){
            arr[j] = b;
            arr[j+1] = a;
            swap = true;
        }
    }
    if(swap == false){
        break;
    }
}
console.log(arr);