/**
 * 
 * @param {Array} arr 
 */
function naiveSelectionSort(arr) {
    // loop over first element
    let swaped
    for (let i = 0; i < arr.length; i++) {
        let minimum = i
        for (let j = i + 1; j < arr.length; j++) {
            // compare the actual minimun with the the current vallue
            if (arr[minimum] > arr[j]) {
                minimum = j
            }
        }
        if (minimum != i) {
            let temp = arr[i]
            arr[i] = arr[minimum]
            arr[minimum] = temp
        }

    }
    return arr
}

// console.log(naiveSelectionSort([5, 2, 3, 6, 1, 7, 29, 24, 16]))
console.log(naiveSelectionSort([5, 2, 0, 3, 6, 1]))