let arr = [8,42, 17,  33, 59];
for(let gap = Math.floor(arr.length/2);gap>0;gap=Math.floor(gap/2)){
    for(let i=gap;i<arr.length;i++){
        let temp = arr[i];
        let j=i;
        while(j>=gap && arr[j-gap]>temp){
            arr[j] = arr[j-gap];
            j-=gap;
        }
        arr[j] = temp
    }
}
console.log(arr)