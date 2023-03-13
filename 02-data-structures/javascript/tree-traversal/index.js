// @ts-check

import BinarySearchTree from "../binary-search-tree/index.js"


/**
 * @typedef BSTreeNodeClass
 * @type {object}
 * @property {number} value - Node value
 * @property {BSTreeNodeClass | null } left - Node left section
 * @property {BSTreeNodeClass | null } right -  Node right section
 * @property {number } insertions -  Node value insertions
 * 
 */

class TreeTraversal extends BinarySearchTree{
    constructor(){
        super()
    }

    /**
     * Breadth First Search
     */
    BSF(){
        let node = this.root,
            data = [],
            /** @type {Array<BSTreeNodeClass | null>} */
            queue = []
        queue.push(node)
        while(queue.length){
            node = queue.shift() || null
            data.push(node?.value)
            if(node?.left) queue.push(node.left)
            if(node?.right) queue.push(node.right)
        }
        return data
    }

    /**
     * Deep frist Search Pre Order
     */
    DFSPreOrder(){
        const data = []

        /**
         * 
         * @param {BSTreeNodeClass | null} node 
         */
        function traverse(node){
            data.push(node?.value)
            if(node?.left) traverse(node.left)
            if(node?.right) traverse(node.right)
        }
        traverse(this.root)
        return data

    }
}

let tree = new TreeTraversal()
/**
 *         5
 *       4  6
 *      3    10
 *    2         14
 */
tree.insert(5)
tree.insert(6)
tree.insert(4)
tree.insert(10)
tree.insert(14)
tree.insert(3)
tree.insert(2)
console.log(tree.BSF())
console.log(tree.DFSPreOrder())

