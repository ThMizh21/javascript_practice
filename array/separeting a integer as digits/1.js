let int= 3458;
let digit="";
while(int>0){
  let x = (int % 10);
    digit+=x+" ";
    int = Math.floor(int/10);
}
console.log(digit);

