// 1. Write a program to check if the character is a vowel, print "The character is a vowel." If the character is a
//  consonant, print "The character is a consonant." Make sure to handle both upper and lower case letters. A vowel 
//  is a character which is any of letters a, e, i, o, u. Any letter which is a not a vowel is considered a consonant.

let char="A";
let letter=char.toLowerCase();
let vowels=["a","e","i","o","u"];
if(vowels.includes(letter)){
    console.log("The character is a vowel.")
}

else{
    console.log("The character is a consonant.")
}