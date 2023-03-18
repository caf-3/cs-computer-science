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
        const element = this.values[index]
        let parrentIndex = Math.floor((index - 1) / 2)
        let parrentValue = this.values[parrentIndex]
        if (element <= parrentValue || !parrentValue) return
        console.log({ element, parrentValue })
        this.values[parrentIndex] = element
        this.values[index] = parrentValue
        index = parrentIndex
        return this.#bubbleUp(index)

    }

    /**
     * 
     * @param {number} value 
     */
    insert(value) {
        this.values.push(value)
        this.#bubbleUp(this.values.length - 1)
        return this.values

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
maxBinaryHeap.insert(55)
console.log(maxBinaryHeap.values)