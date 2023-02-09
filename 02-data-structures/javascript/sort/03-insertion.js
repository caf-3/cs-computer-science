
/**
 * 
 * @param {Array} arr 
 */
function naiveInsertionSor(arr) {
    for (let i = 1; i < arr.length; i++) {
        const sortedSection = arr.slice(0, i)
        for (let j = i - 1; j >= 0; j--) {
            console.log({ j, i, jVal: arr[j], iVal: arr[i], sortedSection, arr })
            if (arr[i] < arr[j]) {
                const temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr
}
console.log(naiveInsertionSor([2, 1, 6, 4, 11, 7, 5, 9]))