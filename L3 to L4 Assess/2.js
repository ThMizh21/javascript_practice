// Write a program to print a specific pattern. The program should take an integer n as input and print a pattern of stars (*). Each row should have a number of stars equal to its row number. However, for every odd row, the stars should be replaced with the row number itself.
// For example, if n = 4, the output should be:
// 1
// **
// 3
// ****

function patternPrint(n) {
    for(i=1;i<=n;i++){
        if(i%2!==0){
            console.log(i)
        }
        else{
            line="";
            for(j=0;j<i;j++){
                line+="* ";

            }
            console.log(line);
        }
    }
    
}

patternPrint(5)