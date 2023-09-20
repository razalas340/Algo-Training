/**
 * 
 * First, create a Stack which contains the following methods:
 * - push: add value to top (end) of stack
 * - pop: remove value from top (end) of stack
 * 
 * Second, create a Queue which consists of two stacks: stack1 and stack2
 * and contains the following methods:
 * - enqueue: add value to queue
 * - dequeue: remove value from queue
 * Queue methods should follow First In, First Out rule.
 * 
 * DO NOT USE NATIVE JS METHODS
 * 
 */

function Stack() {
        this.counter = -1;
        this.array = [];
        this.push = function (val) {
            this.counter++;
            this.array[this.counter] = val;
        
        }

        this.pop = function() {
            if (this.array.length !== 0) {
                delete this.array[this.counter]; 
                this.counter--;
            }
           
        }


      
    //declare the obj queue
      //add key labeled stack1, with a vlue of a func that adds val to queue
 } 
       

// let stack1 = new Stack()

// let stack2 = new Stack()


function Queue() {
    let stack1 = new Stack()

    let stack2 = new Stack()

    

}

const queue1 = Queue()
console.log(queue1)

module.exports = { Stack, Queue };
