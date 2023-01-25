/**
 * 
 * @param {Array} arr 
 */
function naiveSelectionSort(arr) {
    // loop over first element
    let swaped
    for (let i = 0; i < arr.length; i++) {
        let minimum = arr[i]
        let minimumIndex
        swaped = false
        for (let j = i+1; j < arr.length; j++) {
            // compare the actual minimun with the the current vallue
            if (minimum > arr[j]) {
                minimum = arr[j]
                minimumIndex = j
                swaped = true
            }
        }
        if (swaped) {
            let temp = arr[i]
            arr[i] = arr[minimumIndex]
            arr[minimumIndex] = temp
        }

    }
    return arr
}

console.log(naiveSelectionSort([5, 2, 3, 6, 1, 7, 29, 24, 16]))