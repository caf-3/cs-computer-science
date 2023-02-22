// @ts-check
class ListNode{
    /**
     * 
     * @param {any} val - Node value
     * @example
     * const node = new Node("A value")
     */
    constructor(val){
        this.val = val
        /** @type any */
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    /**
     * 
     * @param {any} value - A value to be inserted in the end
     */
    push(value){
        const newNode = new ListNode(value)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        // because of intelliSense (on @vsCode) we added the bellow if statement instead of else on the above if 
        if(this.tail) {
            this.tail.next = newNode
            this.tail = newNode
            
        }
        this.length += 1
        return this
    }
}

const list = new SinglyLinkedList()
list.push(1)
list.push(5)
list.push("A new value")
console.log(list)