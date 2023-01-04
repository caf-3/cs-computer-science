/**
 * 
 * @param {String} longStr 
 * @param {String} shortStr 
 */
function stringSearch(longStr, shortStr) {
  let count = 0;
  let matches = 0;

  for (let i = 0; i < longStr.length; i++) {
    for (let j = matches; j <= shortStr.length; j++) {
      console.log(longStr[i], shortStr[j], { i, j, matches, count })
      if (longStr[i] != shortStr[j]) {
        matches = 0;
        break
      }
      matches += 1;
      break
    }
    if (matches == shortStr.length) count += 1

  }
  return count
}

console.log(stringSearch("meo bro meu bro", "bro"))

/**
 * 
 * @param {String} longStr 
 * @param {String} shortStr 
 */
function naiveSolution(longStr, shortStr) {
  let count = 0;

  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j <= shortStr.length; j++) {
      if (longStr[i] != shortStr[i+j]) {
        break
      }
    }
  }
  return count
}