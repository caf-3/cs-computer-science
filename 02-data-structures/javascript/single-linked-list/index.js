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

    /**
     * Remove a node at a given index
     * - Returns
     * - - undefined if the index is less than zero or greater than the length
     * - - The value of the node removed
     * @param {number} index 
     * @returns {NodeClass | null | undefined}
     */
    remove(index){
        // if the index is less than zero or greater than the length
        if(index < 0 || index >= this.length) return

        // if the index is same as the length - 1, pop
        if(index == this.length - 1) return this.pop()

        // if the index is 0 shift
        if(index == 0) return this.shift()

        // accessing the node before
        const previousNode = this.get(index - 1)
        // get the node we want to remove
        const removedNode = previousNode?.next

        // remove the node
        if(previousNode) previousNode.next = removedNode?.next || null

        this.length--

        return removedNode

    }
}

const list = new SinglyLinkedList()

list.push(1)
list.push(2)
list.push(3)
list.push(4)
console.log(list.length)
console.log(list.get(4))
console.log(list.remove(4))
console.log(list.get(4))
console.log(list.length)


