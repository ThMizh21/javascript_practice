let arr = [64, 34, 25, 12, 22, 11, 90];

let n= arr.length;

let gap = Math.floor(n/2);
while(gap>0){
for(let i=gap;i<n;i++){
    let temp = arr[i];
    let idx =i;
    while(idx>=gap && arr[idx-gap]>temp){
        arr[idx] = arr[idx-gap];
        idx -=gap;
    }
    arr[idx] = temp;
}
gap=Math.floor(gap/2);
}
console.log(arr);