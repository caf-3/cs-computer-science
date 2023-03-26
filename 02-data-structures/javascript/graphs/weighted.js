// @ts-check

class WeightedGrap {
    constructor() {
        /**
         * @type {Object<any, Array<{node: any, weight: Number}>>}
         */
        this.adjacencyList = {}
    }

    /**
     * Add a vertex
     * @param {any} vertex 
     */
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    /**
     * 
     * @param {any} vertex1 
     * @param {any} vertex2 
     * @param {number} weigth
     */
    addEdge(vertex1, vertex2, weigth) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push({ node: vertex2, weigth })
            this.adjacencyList[vertex2].push({ node: vertex1, weigth })
        }
        return this.adjacencyList
    }
}

let g = new WeightedGrap()

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addEdge("A", "B", 5)
g.addEdge("B", "C", 7)
g.addEdge("C", "A", 12)
console.log(g.adjacencyList)