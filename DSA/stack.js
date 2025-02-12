class Stack{
    constructor(){
        this.stack =[];
    }


stackPush(n){
    if(this.stack.length === 0){
        this.stack[0] = n;
}
else{
    this.stack.length++;
    for(let i = this.stack.length - 1; i > 0; i--){
        this.stack[i] = this.stack[i-1];
    }
    this.stack[0] = n;
}
}

stackPop(){
    if(this.stack.length === 0){
        return null;
    }
    let temp = stack[0];
    for(let i = 0; i < this.stack.length - 1; i++){
        this.stack[i] = this.stack[i+1];
    }
    this.stack.length--;
    return temp;
}

stackPeek(){
    if(this.stack.length === 0){
        return null;
    }
    return this.stack[0];

}
}

let stack = new Stack();
stack.stackPush(2);
stack.stackPush(3);
stack.stackPush(4);
console.log(stack.stack);

let stack1 = new Stack();
stack1.stackPush(5);
stack1.stackPush(6);
stack1.stackPush(7);
console.log(stack1.stack);