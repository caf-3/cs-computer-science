/**
 * A function that takes an @array of values and search for @value
 * @returns @
 * @param {Array} arr
 * @param {any} value
 */

function linearSearch(arr, value){
    // linerar search over @arr
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == value) return i
    }
    return -1
}

console.log(linearSearch([1, 23, 77, 34, 2, 55, 8], 1))