// @ts-check
function pivot(arr, start = 0, end = arr.length + 1) {
    const pivot = arr[start]
    let swapIndex = start;
    function swap(array, i, j) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex
}

// pivot([5, 2, 7, 3, 4, 9, 23, 0])

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        // left
        quickSort(arr, left, pivotIndex - 1)

        // right
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}
console.log(quickSort([34, 18, 0, 9, 2, 6,-9, -3, 8, 11]))