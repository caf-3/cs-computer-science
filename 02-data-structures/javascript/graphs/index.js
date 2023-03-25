// @ts-check

class Graph {
    constructor() {
        /**
         * @type {Object<any, Array>}
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
     */
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(edge => edge != vertex2)
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(edge => edge != vertex1)
        }
        return this.adjacencyList
    }

    /**
     * 
     * @param {any} vertex1 
     * @param {any} vertex2 
     */
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
        }
        return this.adjacencyList
    }

    /**
     * Remove a vertex
     * @param {any} vertex 
     * @returns 
     */

    removeVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            while (this.adjacencyList[vertex].length) {
                const adjacentVertex = this.adjacencyList[vertex].pop()
                this.removeEdge(vertex, adjacentVertex)
            }
            delete this.adjacencyList[vertex]
        }
        return this.adjacencyList
    }

    /**
     * 
     * @param {any} start 
     */
    depthFirstRecursive(start) {
        const result = []
        /**
         * @type {Object}
         */
        const visited = {};
        const adjacencyList = this.adjacencyList;

            (
                /**
                 * 
                 * @param {any} vertex 
                 */
                function dfs(vertex) {
                    if (!vertex) return null
                    visited[vertex] = true
                    result.push(vertex)

                    adjacencyList[vertex].forEach(neighbor => {
                        if (!visited[neighbor]) return dfs(neighbor)
                    })



                })(start)

        return result
    }

    depthFristIterative(start){
        const stack = [start]
        const result = []
        const visited = {};
        let currentVertex

        visited[start] = true
        while(stack.length){
            currentVertex = stack.pop()
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }
        return result
    }

    breadthFirst(start){
        const queue = [start]
        const result = []
        const visited = {};
        let currentVertex

        visited[start] = true

        while(queue.length){
            currentVertex = queue.shift()
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            })
        }
        return result
    }


}

let g = new Graph()

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")
console.log(g.depthFirstRecursive("A"))
console.log(g.depthFristIterative("A"))
console.log(g.breadthFirst("A"))