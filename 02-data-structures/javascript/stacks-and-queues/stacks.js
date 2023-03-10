// @ts-check

/**
 * @typedef {any} StackNodeValue
 */

// types
/**
 * @typedef StackNodeClass
 * @type {object}
 * @property {StackNodeValue} value - node value
 * @property {StackNodeClass | null } next - next node
 */

/**
 * @type {StackNodeClass}
 */
class StackNode{

    /**
     * 
     * @param {any} value - Node value
     * @example
     * const node = new StackNode("A value")
     */
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        /** @type {StackNode | null} */
        this.first = null

        /** @type {StackNode | null} */
        this.last = null
        this.size = 0
    }

    /**
     * Add a value to the beginning of the Stack
     * @param {any} val 
     */
    push(val){
        const createdNode = new StackNode(val)

        if(this.size == 0){
            this.first = createdNode
            this.last = createdNode
        }else {
            let temp = this.first
            this.first = createdNode
            this.first.next = temp
        }
        return ++this.size
    }

    /**
     * Remove this first item
     */
    pop(){
        if(!this.first) return null

        const temp = this.first
        if(this.size == 0) {
            this.first = null
        }
        this.first = this.first?.next || null
        this.size--
        return temp
    }
}