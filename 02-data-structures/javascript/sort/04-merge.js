/**
 * this function will merge two sorted arrays and return one sorted array
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
function merge(arr1, arr2) {
    let results = []
    // counters for each array index
    let i = 0 // for arr1
    let j = 0 // for arr2

    while (i < arr1.length && j < arr2.length) {
        /**
         * While counters are less than above arrays length
         * We will compare:
         * - if second array (arr2) on position j is greater than first array (arr1) on positioni i
         *   we will take arr1 on position i and push into results 
         *   (NOTE THAT THE ABOVE ARRAYS ARE SORTED AND WE DON'T HAVE DUPLICATES )
         * - otherwise we will make the above operation to arr2 on position j
         */

        if (arr2[j] > arr1[i]) {
            results.push(arr1[i])
            i++ // we increment one to treat with the next arr1 index value
        } else {
            results.push(arr2[j])
            j++ // we increment one to treat with the next arr2 index value
        }
    }

    /**
     * The above loop can end if only one exausted array
     * We need to ensure that all arrays are exausted
     */
    while (i < arr1.length && j < arr2.length) {
        results.push(arr1[i])
        i++ // we increment one to treat with the next arr1 index value
    }
    while (j < arr2.length) {
        results.push(arr2[j])
        j++ // we increment one to treat with the next arr2 index value
    }
    return results
}

console.log(merge([2, 5, 13, 16, 40, 70], [4, 10, 11, 14, 20, 21, 33, 90]))