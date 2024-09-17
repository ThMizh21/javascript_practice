// Given the array seats = [1, 0, 1, 1, 0, 0, 1, 0], where 1 means a seat is booked and 
// 0 means a seat is available, count the total number of available seats.
avlseats([1, 0, 1, 1, 0, 0, 1, 0]);
function avlseats(n) {
    let seats =n;
    
    avl_seat=0;
    for(i=0;i<=seats.length-1;i++){
        let avl =seats[i];
        if(avl==0){
            avl_seat++;
        }
    }
    console.log("The number of seats available is "+ avl_seat);
}