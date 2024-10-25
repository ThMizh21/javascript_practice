function findAlphabeticallyFirst(arr) {
    let first = arr[0]; 
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < first) {
        first = arr[i];
      }
    }
    return first;
  }
  
  let string = ['Suraj', 'Sanjeev', 'Rajnish', 'Yash', 'Ravi']
  console.log(findAlphabeticallyFirst(string))