// @ts-check

/**
 * @typedef {any} QueueNodeValue
 */

// types
/**
 * @typedef QueueNodeClass
 * @type {object}
 * @property {QueueNodeValue} value - node value
 * @property {QueueNodeClass | null } next - next node
 */

/**
 * @type {QueueNodeClass}
 */
class QueueNode{

    /**
     * 
     * @param {any} value - Node value
     * @example
     * const node = new QueueNode("A value")
     */
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        /** @type {QueueNodeClass | null} */
        this.first = null

        /** @type {QueueNodeClass | null} */
        this.last = null
        this.size = 0
    }

    /**
     * Add a value to the end
     * @param {any} value 
     */
    enqueue(value){
        const newNode = new QueueNode(value)
        if(this.size == 0){
            this.first = newNode
            this.last = newNode
        }else {
            if(this.last) this.last.next = newNode
            this.last = newNode
        }

        return ++this.size

    }

    /** Remove from the very beginning */
    dequeue(){
        if(this.size == 0) return null

        const temp = this.first
        if(this.first == this.last) this.last = null

        this.first = this.first?.next || null
        this.size--
        return temp?.value
    }
}