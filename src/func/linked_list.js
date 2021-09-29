// 使用 Linked List 實作 Stack
// 實作需包含以下方法。
// push() : 添加新元素。
// pop():移除元素並返回被移除的元素。
// size():返回所有元素數量。
// const myStack = new Stack()
// myStack.push(1)
// myStack.push(2) 
// myStack.push(3)
// myStack.pop() // 3
// myStack.size() // 2

//single node constructor
class Node{
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

//stack constructor
class Stack {
    constructor() {
        this.head = null;
        //size
        this.size = 0;
    }
    //push element
    push(data){
        let current;
        let node = new Node(data, this.head);
        //No first element 
        if(!this.head){
            this.head = node; 
        //Set as the next element
        }else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        //update size
        this.size++;
    }
    //pop element  *return the removed one
    pop(){
        let current;
        if(current.next === null){
            current.data = null;
        }
    }


}

const myStack = new Stack()
myStack.push(1)
myStack.push(2) 
myStack.push(3)
myStack.pop() // 3
myStack.size() // 2

console.log(myStack);
