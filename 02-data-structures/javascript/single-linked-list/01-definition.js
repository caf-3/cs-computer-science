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
class ListNode {
    /**
     * 
     * @param {any} val - Node value
     * @example
     * const node = new Node("A value")
     */
    constructor(val) {
        this.val = val

        /** @type {NodeClass | null} */
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        /** @type {NodeClass | null} */
        this.head = null

        /** @type {NodeClass | null} */
        this.tail = null
        this.length = 0
    }

    /**
     * Insert a node in the end
     * @param {any} value - A value to be inserted in the end
     */
    push(value) {
        const newNode = new ListNode(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        // because of intelliSense (on @vsCode) we added the bellow if statement instead of else on the above if 
        if (this.tail) {
            this.tail.next = newNode
            this.tail = newNode

        }
        this.length += 1
        return this
    }

    /**
     * Remove a node in the end
     * @returns {NodeClass | undefined}
     */
    pop() {
        // base case
        if (!this.head) return
        //  current list value (starting from head)
        let current = this.head
        /** @type any - a variable to store the previous value before the tail */
        /** @type {NodeClass | null} - previous node before tail */
        let previousNode = current
        while (current?.next) {
            previousNode = current
            current = current.next
        }
        if (this.length == 0) {
            this.tail = null
            this.head = null
        }
        previousNode.next = null
        this.tail = previousNode
        this.length--
        return current
    }

    /**
     * Remove the first node of the list
     * @returns {NodeClass | null | undefined}
     */

    shift() {
        if (!this.length) return
        const removedHead = this.head
        this.head = removedHead?.next || null
        this.length--
        if (this.length == 0) {
            this.tail = null
        }
        return removedHead

    }

    /**
    * Insert a new node to the beginning
    * @param {any} value - A value to be inserted in the beginning
    */
    unshift(value) {
        const newNode = new ListNode(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            const currentHead = this.head
            newNode.next = currentHead
            this.head = newNode
        }
        this.length++
        return this

    }

    /**
     * Access a node at given @index
     * @param {number} index - Node index
     */
    get(index) {
        if (index < 0 || index >= this.length) return null
        let currentNode = this.head
        let counter = 0
        while (counter != index) {
            currentNode = currentNode?.next || null
            counter++
        }
        return currentNode

    }

    /**
     * Change the value of a node 
     * - At index with given value
     * - Returns true for success change 
     * - Returns false if node not found at given index
     * @param {number} index 
     * @param {any} value 
     * @returns {boolean}
     */
    set(index, value) {
        const node = this.get(index)
        if(!node) return false
        node.val = value
        return true
    }
    
    /**
     * Insert a to the list at a given position/index
     * - At index with given value
     * - Returns true for success insertion
     * - Returns false if
     * - - if the index is less or greather than the length of the list
     * @param {number} index 
     * @param {any} value 
     * @returns {boolean}
     */
    insert(index, value){
        if(index < 0 || index > this.length) return false

    
        if(index == 0) return this.unshift(value) && true
        if(index == this.length) return !!this.push(value)
        const previousNode = this.get(index - 1)
        const previousNodeNextNode = previousNode?.next
        const newNode = new ListNode(value)
        if(previousNode) previousNode.next = newNode
        newNode.next = previousNodeNextNode || null
        this.length++
        return true
    }
}

const list = new SinglyLinkedList()

list.unshift(1)
list.unshift("Spain")
list.push("My name")
list.push("MOZAMBIQUE")
console.log(list)
const newPosition = 3
console.log(list.get(newPosition))
console.log(list.insert(newPosition, "PORTUGAL"))
console.log(list.get(newPosition))
// console.log(list)


