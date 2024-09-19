let int= 3458;
let sum=0;
let y="";
let z="";
while(int>0){
  let x = (int % 10);
  if(x%2===0){
    y+=x+" ";
  }
  else{
    z+=x+" ";
  }
    int = Math.floor(int/10);
}
console.log("Even Numbers:"+y);
console.log("Odd Numbers:"+z)
