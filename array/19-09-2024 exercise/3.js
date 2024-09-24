// Given an array of names of people, add the length of the array as the first element in the array.

let names = ["vajesh","gowtham","kavinisha","joti","hari","sudhan"];
let x= names.length;
let y = names.unshift(x);
console.log(names)