// 3. Given a string, the task is to reverse the order of the words in the given string.
// Examples:
// Input: s = “hello everyone”
// Output: s = “everyone hello”
// Input: s = “i love programming very much”
// Output: s = “much very programming love i”

let  s = "hello everyone";
console.log(s.split(" ").reverse().join(" "));