// Tested inside a browser
function sumUpTo2(n){
    return n * (n + 1) / 2
}

let t2 = performance.now()
sumUpTo2(1000000)
let t3 = performance.now()
console.log(`Function 2: Time elapsed: ${(t3 - t2) / 1000} seconds`)
console.log(`Function 2: Time elapsed: ${(t3 - t2)} milliseconds`)