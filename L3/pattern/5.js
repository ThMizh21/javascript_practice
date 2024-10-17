let n = 3;

for (let i = n; i > 0; i++) {
    let line = ""; 
    for (let j = i; j > 0; j--) {
        line += j + " "; 
    }
    console.log(line.trim()); 
}