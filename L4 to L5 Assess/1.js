// Given a string count number of distinct vowels in the String. Consider all the inputs to be in
// lowercase
// Input: cool
// Output: 1

function countDistinctVowels(str) {
    // Enter your code here
    let a = str.split("");
    var New =[];
     for(i=0;i<a.length;i++){
         let x = New.indexOf(a[i]);
         if(x===-1){
             New.push(a[i]);
         }b
     }
     let count =0;
     for(let j=0;j<New.length;j++){
         let z= New[j];
         if(z==="a"||z==="e"||z==="i"||z==="o"||z==="u"){
             count++
         }
     }
     console.log(count);
    
}

	
countDistinctVowels("cool")