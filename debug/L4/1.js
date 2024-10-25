let arr = [5, 8, 13, 21];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 13) {
    console.log("Found 13!");  // Loop continues even after finding 13
  }
}