let n = 91;
let Arr = [45, 12, 78, 34, 89, 23, 5, 67, 91, 30];

let arr = Arr.sort((a, b) => a - b); // Sort numerically

let rightIndex = arr.length - 1;
let leftIndex = 0;
let found = false; // To track if the number was found

while (leftIndex <= rightIndex) {
  let midIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (n === arr[midIndex]) {
    console.log("Found:", midIndex);
    found = true; // Set found to true
    break; // Exit the loop once found
  } else if (n > arr[midIndex]) {
    leftIndex = midIndex + 1; // Adjust left index
  } else {
    rightIndex = midIndex - 1; // Adjust right index
  }
}

if (!found) {
  console.log("Number not found");
}
