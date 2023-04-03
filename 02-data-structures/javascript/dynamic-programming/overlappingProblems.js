function fib(n){
    if(n <= 2) return 1
    return fib(n-1) + fib(n-2)
}

// console.log("without memo:",fib(45))
function fibWithMemoization(n, memo=[]){
    if(memo[n]) return memo[n]
    if(n <= 2) return 1
    let res = fibWithMemoization(n-1, memo) + fibWithMemoization(n-2, memo)
    memo[n] = res
    return res
}
function fibWithMemoization2(n, memo=[undefined, 1, 1]){
    if(memo[n]) return memo[n]
    let res = fibWithMemoization2(n-1, memo) + fibWithMemoization2(n-2, memo)
    memo[n] = res
    return res
}

function tabulatedFib(n){
    if(n <= 2) return 1
    const fibNums = [0, 1, 1 ]

    for(let i = 3; i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2]
    }
    return fibNums[n]
}
console.log("tabulated:", tabulatedFib(100))
