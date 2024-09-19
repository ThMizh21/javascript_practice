let int= 3458;
let sum=0;
while(int>0){
  let x = (int % 10);
    sum+=x;
    int = Math.floor(int/10);
}
console.log(sum);

