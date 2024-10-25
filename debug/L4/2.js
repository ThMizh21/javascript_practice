function findMax(arr) {
    let max = 0; 
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >  max) {
        max = arr[i];
      }
    }
    return max;
  }

  let int =[12,1,23,120,43,65,76,90,23];
  console.log(findMax(int));