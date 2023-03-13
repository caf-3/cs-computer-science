// @ts-check

/**
 * @typedef BSTreeNodeClass
 * @type {object}
 * @property {number} value - Node value
 * @property {BSTreeNodeClass | null } left - Node left section
 * @property {BSTreeNodeClass | null } right -  Node right section
 * @property {number } insertions -  Node value insertions
 * 
 */

/**
 * @type {BSTreeNodeClass}
 */

class BSTreeNode {

    /**
     * 
     * @param {number} value - Node value
     * @example
     * const node = new BSTreeNode("A value")
     */
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
        this.insertions = 0
    }
}

class BinarySearchTree {
    constructor() {
        /** @type {BSTreeNodeClass | null} - Binary Search tree root */
        this.root = null
    }

    /**
     * Insert a value to Binary search tree
     * @param {number} value 
     */
    insert(value) {
        const newNode = new BSTreeNode(value)
        if (!this.root) {
            this.root = newNode
            return this
        } else {
            let current = this.root

            while (true) {

                if (current.value == value) {
                    current.insertions++
                    return undefined
                }
                // handling the left side
                if (value < current.value) {
                    if (current.left == null) {
                        current.left = newNode
                        return this
                    }
                    current = current.left

                    // handling the right side
                } else if (value > current.value) {
                    if (current.right == null) {
                        current.right = newNode
                        return this
                    }
                    current = current.right

                }
            }
        }
    }

    /**
     * Get a value inside Binary search tree
     * @param {number} value 
     */
    get(value) {
        if (!this.root) {
            return false
        } else {
            let current = this.root

            while (true) {

                if (current.value == value) {
                    return current.value
                }

                // handling the left side
                if (value < current.value) {
                    if (current.left == null) {
                        return false
                    }
                    current = current.left

                    // handling the right side
                } else if (value > current.value) {
                    if (current.right == null) {
                        return false
                    }
                    current = current.right
                }
            }
        }
    }
}

export default BinarySearchTree