// Tested inside a browser
function sumUpTo(n){
    let total = 0
    for(let i=0; i <= n;i++){
        total += i
    }
    return total
}
let t1 = performance.now()
sumUpTo(1000000)
let t2 = performance.now()
console.log(`Function 1: Time elapsed: ${(t2 - t1) / 1000} seconds`)