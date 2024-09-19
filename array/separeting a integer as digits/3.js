let int= 3458;
let sum=0;
while(int>0){
  let x = (int % 10);
  y=x*2;
    sum+=y;
    int = Math.floor(int/10);
}
console.log(sum);

