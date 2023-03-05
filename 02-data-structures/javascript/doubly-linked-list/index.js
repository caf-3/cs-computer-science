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
 * @property {NodeClass | null } prev - previous node
 */

/**
 * @type {NodeClass}
 */
class ListNode {
    /**
     * 
     * @param {number} val - Node value
     * @example
     * const node = new Node("A value")
     */
    constructor(val) {
        this.val = val

        /** @type {NodeClass | null} */
        this.next = null

        /** @type {NodeClass | null} */
        this.prev = null
    }
}



class DoublyLinkedList {
    constructor() {
        /** @type {NodeClass | null} */
        this.head = null

        /** @type {NodeClass | null} */
        this.tail = null
        this.length = 0
    }

    /**
     * This function insert a new node to the end of the list
     * @param {any} value 
     */
    push(value) {
        // create new node
        const newNode = new ListNode(value)

        // define tail and head for empty list
        if (this.length == 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            if (this.tail) {
                this.tail.next = newNode
                newNode.prev = this.tail
                this.tail = newNode
            }
        }

        this.length++
        return this

    }

    /**
     * Remove the last item
     */
    pop() {
        // return undefined if the list is empty
        if (this.length == 0) return

        const removedTail = this.tail
        if (this.length == 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = removedTail?.prev || null
            if (this.tail?.next) this.tail.next = null
            if (removedTail?.prev) removedTail.prev = null
        }

        this.length--
        return removedTail
    }

    /**
     * Remove the first item
     */
    shift() {
        // return undefined if the list is empty
        if (this.length == 0) return

        const removedHead = this.head
        if (this.length == 1) {
            this.head = null
            this.tail = null
        } else {
            // get previous head next property to be the new head
            this.head = removedHead?.next || null
            
            if (this.head?.next) this.head.prev = null
            if (removedHead?.next) removedHead.next = null
        }

        this.length--
        return removedHead
    }
}

// let list = new DoublyLinkedList()

// list.push(4)
// list.push(6)
// list.push(11)
// console.log(list)
// console.log('tail', list.tail)