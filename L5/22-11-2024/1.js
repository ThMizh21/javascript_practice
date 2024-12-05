// Implement an algorithm to determine if a string has all unique characters
function hasAllUniqueCharacters(str) {
    let seenChars = new Set();  // Create an empty set to track characters
    
    for (let i = 0; i < str.length; i++) {
        if (seenChars.has(str[i])) {
            // If the character is already in the set, return false (not unique)
            return false;
        }
        seenChars.add(str[i]);  // Add the character to the set
    }
    
    return true;  // If no duplicates are found, return true 
}
console.log(hasAllUniqueCharacters("abcdef"));  
console.log(hasAllUniqueCharacters("aabbcc"));  
