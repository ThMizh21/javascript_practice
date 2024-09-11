// Print a right-angled triangle pattern of stars of a given height.

let height=5;
for (i=1;i<=height;i++){
    let row='';
    for(let j=1;j<=i;j++){
        row+='*';
        
    }
    console.log(row);
   
}
