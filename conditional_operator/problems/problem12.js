let items =6;
let total= 120;
let discount=20
if (items>5 || total>100){
    
    actualprice = total-((total * discount)/100);
    console.log(actualprice);
}
else {
    console.log("no discount")
}