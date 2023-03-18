// @ts-check

class MaxBinaryHeap{
    constructor(){
        /** @type {Array<number>} - Max binary heap values */
        this.values = []
    }

    /**
     * This function bubble up inserted node in case it's greater than its parrent
     * @param {number} index - Node index
     */
    #bubbleUp(index){
        // get parrent node index formula (n-1)/2
        const parrentIndex = Math.floor((index - 1) / 2)
        const parrentValue = this.values[parrentIndex]
        const nodeValue = this.values[index]

        // Recursive base case
        if(nodeValue < parrentValue || !parrentValue) return 

        // swap parrent value with inserted node value
        this.values[parrentIndex] = nodeValue
        this.values[index] = parrentValue
        return this.#bubbleUp(parrentIndex)
        
    }

    /**
     * 
     * @param {number} value 
     */
    insert(value){
        this.values.push(value)

        // bubble up for non first value
        if(this.values.length > 1)  this.#bubbleUp(this.values.length-1)

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