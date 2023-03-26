// @ts-check

/** @type {PriorityNode} - Priority node */
class PriorityNode{
    /**
     * 
     * @param {any} value - Node value
     * @param {number} prioprity - Priority level
     */
    constructor(value, prioprity){
        this.value = value
        this.priority = prioprity
    }
}

export default class PriorityQueue {
    constructor() {
        /** @type {Array<PriorityNode>} - min binary heap values */
        this.values = []
    }

    /**
     * This function bubble up inserted node in case it's greater than its parrent
     * @param {number} index - Node index
     */
    #bubbleUp(index) {
        // get parrent node index formula (n-1)/2
        const parrentIndex = Math.floor((index - 1) / 2)
        const parrent = this.values[parrentIndex]
        const node = this.values[index]

        // Recursive base case
        if (!parrent || node.priority > parrent.priority) return
        // swap parrent value with inserted node value
        this.values[parrentIndex] = node
        this.values[index] = parrent
        return this.#bubbleUp(parrentIndex)

    }

    /**
     * Complexity - O(LogN)
     * @param {any} value 
     * @param {number} prioprity 
     */
    enqueue(value, prioprity) {
        const newPriorityNode = new PriorityNode(value, prioprity)
        this.values.push(newPriorityNode)

        // bubble up for non first value
        if (this.values.length > 1) this.#bubbleUp(this.values.length - 1)
        return this.values

    }

    #sinkDown() {
        let index = 0
        const length = this.values.length
        const element = this.values[0]

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChildValue, rightChildValue
            let swap = null

            if (leftChildIndex < length) {
                leftChildValue = this.values[leftChildIndex]
                if (leftChildValue.priority < element.priority) {
                    swap = leftChildIndex
                }
            }

            if (rightChildIndex < length) {
                rightChildValue = this.values[rightChildIndex]
                if (
                    (swap == null && rightChildValue.priority < element.priority) ||
                    (swap != null && (
                        leftChildValue && rightChildValue.priority < leftChildValue.priority
                    ))
                ) swap = rightChildIndex
            }

            if (swap == null) break

            this.values[index] = this.values[swap]
            this.values[swap] = element
            index = swap
        }
    }

    /**
     * Complexity - O(LogN)
     * Removes the root/Min value
     */
    dequeue() {
        const min = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
            if (end) this.values[0] = end
            // bubble down / trickle down
            this.#sinkDown()
        }
        return min
    }

}

const ER = new PriorityQueue()

ER.enqueue("common cold", 5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever", 3)
ER.enqueue("broken arm", 2)
ER.enqueue("beaten by a bee", 4)


