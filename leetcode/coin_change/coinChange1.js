const log = console.log.bind(console);
function change(coins, amount) {
    if (amount < 1) {
        return 0
    }
    let memoDict = {}
    let final = find(amount, coins, memoDict)
    log(memoDict)
    return final

    function find(remain = 0, coins = [], memo = {}) {
        if (remain < 0) {
            return -1
        }
        if (remain === 0) {
            return 0
        }
        let val = memo[remain]
        if (val) {
            return val
        }

        let min = Infinity
        for (let coin of coins) {
            let res = find(remain - coin, coins, memo)
            if (res >= 0 && res < min) {
                min = res + 1
            }
        }

        let res = min === Infinity ? -1 : min
        memo[remain] = res
        return res
    }
}

function change2(coins = [], amount) {
    let memo = {}
    for (let i = 1; i <= amount; i++) {
        memo[i] = Infinity
    }
    memo[0] = 0

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (coin <= i) {
                memo[i] = Math.min(memo[i], memo[i - coin] + 1)
            }
        }
    }
    let res = memo[amount]
    // log(memo)
    return (res === Infinity) ? -1 : res
}


function test() {
    const coins = [1, 2, 5]
    const amount = 11
    log(change(coins, amount))
    log(change2(coins, amount))
}
test()