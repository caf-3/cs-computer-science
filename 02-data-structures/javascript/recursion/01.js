/**
 * Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
 */
/**
 * 
 * @param {Number} nthFibNum 
 * @returns 
 */
function fib(nthFibNum){
      let result = [1, 1]
      function helper(nth){
          if(result.length == nthFibNum) return result[nthFibNum - 1]
          // sum previous numbers
          const lastNumber = result[result.length - 1]
          const beforeLastNumber = result[result.length - 2]
          result.push(lastNumber + beforeLastNumber)
          return helper(nth - 1)
      }
      return helper(nthFibNum)
  }