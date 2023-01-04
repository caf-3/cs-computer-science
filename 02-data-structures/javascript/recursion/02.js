/**
 * Reverse
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 */
/**
 * 
 * @param {string} str 
 * @returns 
 */
function reverse(str) {
    // base case
    if (str.length === 0) return ""
    // return the last string plus the remaining text
    const textLength = str.length
    return str[textLength - 1] + reverse(str.slice(0, textLength - 1))
}

function isPalindrome(value) {
    // add whatever parameters you deem necessary - good luck!
    function reverse(str) {
        // base case
        if (str.length === 0) return ""
        // return the last string plus the remaining text
        const textLength = str.length
        return str[textLength - 1] + reverse(str.slice(0, textLength - 1))
    }
    //  console.log(reverse(value) === value)
    return reverse(value) === value
}

isPalindrome('awesome') // false
isPalindrome('foobar') // false
isPalindrome('tacocat') // true
isPalindrome('amanaplanacanalpanama') // true
isPalindrome('amanaplanacanalpandemonium') // false

/**
 * 
 * Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
 * @param {array} arr 
 * @param {function} cb 
 */
function someRecursive(arr, cb) {
    // base case
    if(arr.length == 0) return false
    
    // get the current array value then pass to the callback and get the callback result
     const lastIndex = arr.length - 1
     const callbackResult = cb(arr[lastIndex])
     return callbackResult || someRecursive(arr.slice(0, lastIndex), cb)
}
const isOdd = val => val % 2 !== 0;

someRecursive([1,2,3,4], isOdd) // true
someRecursive([4,6,8,9], isOdd) // true
someRecursive([4,6,8], isOdd) // false
someRecursive([4,6,8], val => val > 10); // false