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
     * This function insert a new node to the beginning of the list
     * @param {any} value 
     */
    unshift(value) {
        // create new node
        const newNode = new ListNode(value)

        // define tail and head for empty list
        if (this.length == 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            if (this.head) {
                this.head.prev = newNode
                newNode.next = this.head
                this.head = newNode
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

    /**
     * Get a node at given index
     * @param {number} index 
     */
    get(index) {
        if (index < 0 || index >= this.length) return null
        let middle = parseInt(String(this.length / 2))
        let counter = index > middle ? this.length - 1 : 0
        let node = index > middle ? this.tail : this.head
        // from the beginning
        while (counter != index) {
            if (index > middle) {
                node = node?.prev || null
                counter--
            } else {
                node = node?.next || null
                counter++
            }
        }
        return node

    }

    /**
     * Set a new value to a node at given index
     * @param {number} index 
     * @param {any} value 
     */
    set(index, value){
        const node = this.get(index)
        if(node) node.val = value
        return node
    }

    /**
     * This funciton insert a value on a given position
     * @param {Number} index 
     * @param {any} value 
     * @returns 
     */

    insert(index, value){
        if (index < 0 || index > this.length) return false

        if(index == 0) return this.unshift(value) && true

        if(index == this.length) return !!this.push(value)

        const newNode = new ListNode(value)

        const beforeNode = this.get(index - 1)
        const afterNode = beforeNode?.next
        if(beforeNode) beforeNode.next = newNode, newNode.prev = beforeNode
        if(afterNode) afterNode.prev = newNode, newNode.next = afterNode || null
        
        
        this.length++
        return true

    }


}