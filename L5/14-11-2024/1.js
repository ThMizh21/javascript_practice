//Insertion Sort
let arr = [64, 34, 25, 12, 22, 11, 90, 5];
let count =0;
for(let i=1;i<arr.length;i++){
    let index = i;
    let value = arr[i];
    for(let j =i-1;j>=0;j--){
        let svalue = arr[j];
        if(svalue>value){
           arr[j+1] = svalue;
           index =j;
           count++ 
        }
    }
    arr[index] = value
}
console.log(arr);
console.log(count);


// line 3 : The loop starts from 1 as we consider the first element of the array is  sorted.
// line 4 : The index is stored in the variable index.
// line 5 : The elemant is stored in the variable value.
// line 6 : The second loop start from i-1 to compare the sorted element with that of the element we have.
// line 7 : The element we get from the second loop is stored in svalue.
// line 8 : Condition checking if svalue is greater than value .
// Line 9 : If the condition is passed svalue is stored in the next index from j.
// Line 10 : The value of variable index is changed into j.
// Line 13 : The value holded by the variable value is passed to arr[index].
