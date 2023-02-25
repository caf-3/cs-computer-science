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
     * 
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
    * 
    * @param {any} value - A value to be inserted in the end
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
     * - Returns true if the change happended
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
}

const list = new SinglyLinkedList()
