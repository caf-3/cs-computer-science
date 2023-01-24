/**
 * 
 * @param {Array} arr 
 */
function bubbleSort(arr) {
    //loop over first element
    for (let i = 0; i < arr.length; i++) {
        //loop over second element
        for (let j = 0; j < arr.length; j++) {
            console.log({ elem1: arr[j], elem2: arr[j + 1] })
            //store first element value
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                // swap
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
            console.log({ arr })
        }
    }
    return arr
}

/**
 * 
 * @param {Array} arr 
 */
function optimizedBubbleSort(arr) {
    //loop over first element
    for (let i = arr.length; i > 0; i--) {
        //loop over second element
        for (let j = 0; j < i - 1; j++) {
            console.log({ elem1: arr[j], elem2: arr[j + 1] })
            //store first element value
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                // swap
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
            console.log({ arr })
        }
    }
    return arr
}

/**
 * 
 * @param {Array} arr 
 */
function optimizedBubbleSort2(arr) {
    let noSwaps
    //loop over first element
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true
        //loop over second element
        for (let j = 0; j < i - 1; j++) {
            console.log({ elem1: arr[j], elem2: arr[j + 1] })
            //store first element value
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                // swap
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                noSwaps = false
            }
            console.log({ arr })
        }
        console.log({ iteration: i })
        if (!noSwaps) break
    }
    return arr
}

// console.log(bubbleSort([5, 24, 23, 8, 92, 65, 1, 34, 85, 6]))
// console.log(optimizedBubbleSort([5, 24, 23, 8, 92, 65, 1, 34, 85, 6]))
// console.log(optimizedBubbleSort([5, 24, 23, 8, 1,6]))
console.log(optimizedBubbleSort2([5, 1, 2, 3, 4]))
