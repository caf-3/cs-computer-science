// @ts-check

class MaxBinaryHeap {
    constructor() {
        /** @type {Array<number>} - Max binary heap values */
        this.values = []
    }

    /**
     * This function bubble up inserted node in case it's greater than its parrent
     * @param {number} index - Node index
     */
    #bubbleUp(index) {
        // get parrent node index formula (n-1)/2
        const parrentIndex = Math.floor((index - 1) / 2)
        const parrentValue = this.values[parrentIndex]
        const nodeValue = this.values[index]

        // Recursive base case
        if (nodeValue < parrentValue || !parrentValue) return

        // swap parrent value with inserted node value
        this.values[parrentIndex] = nodeValue
        this.values[index] = parrentValue
        return this.#bubbleUp(parrentIndex)

    }

    /**
     * 
     * @param {number} value 
     */
    insert(value) {
        this.values.push(value)

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
                if (leftChildValue > element) {
                    swap = leftChildIndex
                }
            }

            if (rightChildIndex < length) {
                rightChildValue = this.values[rightChildIndex]
                if (
                    (swap == null && rightChildValue > element) ||
                    (swap != null && (
                        leftChildValue && rightChildValue > leftChildValue
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
     * Removes the root/max value
     */
    extractMax() {
        const max = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
            if (end) this.values[0] = end
            // bubble down / trickle down
            this.#sinkDown()
        }
        return max
    }

}

/**
 *              55
 *        27         33
 *    17    22   30     14
 * 
 */

const maxBinaryHeap = new MaxBinaryHeap()
maxBinaryHeap.insert(14)
maxBinaryHeap.insert(33)
maxBinaryHeap.insert(17)
maxBinaryHeap.insert(27)
maxBinaryHeap.insert(30)
maxBinaryHeap.insert(22)
// maxBinaryHeap.insert(43)
// maxBinaryHeap.insert(58)
maxBinaryHeap.insert(55)

console.log(maxBinaryHeap.values) // [ 55, 30, 33, 14, 27, 17, 22 ]
console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap.values) // [ 33, 30, 22, 14, 27, 17 ]
console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap.values) // [ 30, 27, 22, 14, 17 ]


