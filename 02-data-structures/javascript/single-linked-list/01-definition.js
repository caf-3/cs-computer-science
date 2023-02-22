// @ts-check

/**
 * @typedef {any} NodeVal
 */

// types
/**
 * @typedef NodeClass
 * @type {object}
 * @property {NodeVal} val - node value
 * @property {NodeClass | null } next - next node
 */

/**
 * @type {NodeClass}
 */
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
        /** @type {NodeClass | null} */
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

    pop(){
        // base case
        if(!this.length) return
        //  current list value (starting from head)
        let current = this.head
        /** @type any - a variable to store the previous value before the tail */
        let previous
        /** @type {NodeClass | null} - previous node before tail */
        let previousNode = current
        while(current){
            if(current.next) previousNode = current
            previous = current.val
            current = current.next
        }
        if(previousNode) previousNode.next = null
        this.tail = previousNode
        this.length--
        return previous
    }
}

const list = new SinglyLinkedList()
list.push(1)
list.push(5)
list.push(3)
list.push(13)
list.push(8)
console.log(list)
console.log(list.pop())
console.log(list)