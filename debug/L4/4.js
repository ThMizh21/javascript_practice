function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {  
      let mid = Math.floor((left + right) / 2);
      
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid + 1;
      }
    }
    
    return -1;  
  }

let Arr = [45, 12, 78, 34, 89, 23, 5, 67, 91, 30];
console.log(binarySearch(Arr,91));

