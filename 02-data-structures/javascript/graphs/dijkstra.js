// @ts-check

import WeightedGraph from "./weighted.js"

class PriorityQueue {
    constructor() {
        this.values = []
    }
    enqueue(val, priority) {
        this.values.push({ val, priority })
        this.#sort()
    }
    dequeue() {
        return this.values.shift()
    }
    #sort() {
        this.values.sort((a, b) => a.priority - b.priority)
    }
}

class Dijkstra extends WeightedGraph {
    constructor() {
        super()
    }

    /**
     * 
     * @param {any} start 
     * @param {any} finish 
     */
    main(start, finish) {
        const nodes = new PriorityQueue()
        const distances = {}
        const previous = {}
        let smallest
        let path = []

        for (let vertex in this.adjacencyList) {
            if (vertex == start) {
                distances[vertex] = 0
                nodes.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null

        }

        while (nodes.values.length) {
            smallest = nodes.dequeue().val
            if (smallest == finish) {
                // build up the path to return at the end

                while(previous[smallest]){
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break

            } else if (smallest || distances[smallest] != Infinity) {

                for(let neighbor in this.adjacencyList[smallest]){
                    // find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor]
                    let candidate = distances[smallest] + nextNode.weigth
                    let nextNeighbor = nextNode.node

                    if(candidate < distances[nextNeighbor]){
                        // updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate

                        // udpating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest

                        // enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate)

                    }
                }

            }
        }
        return path.concat(smallest).reverse()
    }
}

var graph = new Dijkstra()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


console.log(graph.main("A", "E"))
console.log(graph.main("A", "F"))
console.log(graph.main("A", "D"))