// Given array two arrays student names and scores, return the student name who has the maximum score eg
//  names=["sanjay", "priya", "ramesh", "sanjana"], scores = [88, 45, 71, 91] Answer sanjana


function studentWithMaxScore(names, scores) {
    let maxScore = -Infinity;
    let maxIndex = -1;

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i];
            maxIndex = i;
        }
    }

    return names[maxIndex];
}

// Example usage:
const names = ["sanjay", "priya", "ramesh", "sanjana"];
const scores = [88, 45, 71, 91];
console.log(studentWithMaxScore(names, scores));  // Output: "sanjana"

