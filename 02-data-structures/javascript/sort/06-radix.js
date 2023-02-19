// @ts-check
/**
 * Get number on position i on num starting backwards
 * @param {number} num 
 * @param {number} i 
 * @returns number
 */
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

/**
 * 
 * @param {number} num 
 * @returns 
 */
function digitCount(num) {
    // return String(num).length
    if (num == 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

/**
 * 
 * @param {Array<number>} arr 
 */
function mostDigits(arr) {
    let maxDigits = digitCount(arr[0])
    for (let i = 1; i < arr.length; i++) {
        // let currentTotalDigits = digitCount(arr[i])
        // if (currentTotalDigits > maxDigits) maxDigits = currentTotalDigits
        maxDigits = Math.max(maxDigits, digitCount(arr[i]))
    }
    return maxDigits
}

/**
 * 
 * @param {Array<number>} nums 
 */
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums)
    for (let k = 0; k < maxDigitCount; k++) {
        /**@type {Array<Array<Number>>} */
        let digitBuckets = Array.from({ length: 10 }, () => [])
        for(let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i])
        }
        // @ts-ignore
        nums = [].concat(...digitBuckets)
    }
    return nums
}
console.log(radixSort([22, 234, 8, 345, 87, 1, 230, 9, 5, 10]))