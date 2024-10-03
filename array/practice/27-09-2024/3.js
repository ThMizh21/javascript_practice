// 3. Given an array of strings count the number of elements which are starting with a vowel

let string = ["Apple","elephant","mango","cherry"];
let vowels=["a","e","i","o","u"];
let len =string.length;
let count=0;
for(i=0;i<len;i++){
    if(vowels.includes(string[i][0].toLowerCase())){
      count++;
    }
}
console.log(count);