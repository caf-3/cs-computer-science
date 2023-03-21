// @ts-check

class HashTable {
    /**
     * 
     * @param {Number} size 
     */
    constructor(size = 53) {
        /**
         * @type {Array<Array<any>>} 
         */
        this.keyMap = new Array(size)
    }

    /**
     * 
     * @param {String} key 
     */
    #hash(key) {
        let total = 0
        let WEIRD_PRIME = 31

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) > 95 ? char.charCodeAt(0) - 96 : char.charCodeAt(0)
            total = (total * WEIRD_PRIME + value) % this.keyMap.length

        }

        return total
    }

    /**
     * 
     * @param {any} key 
     * @param {any} value 
     */
    set(key, value) {
        // get key index
        const index = this.#hash(key)
        console.log({ index })

        // if there is no data at this index we create a empty array
        if (!this.keyMap[index]) this.keyMap[index] = []

        this.keyMap[index].push([key, value])
    }

}

let ht = new HashTable()
ht.set("i love", "Mingas")
ht.set("i was eating", "Beans")
ht.set("Listening to", "J Cole")
ht.set("song", "ATM")
ht.set("verse", "uno dois tres")
console.log(ht.keyMap)