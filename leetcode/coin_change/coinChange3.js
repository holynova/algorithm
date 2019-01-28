const log = console.log.bind(console);
function change(amount, coins = [], ) {
  let memo = {}
  let solution = []
  for (let i = 1; i <= amount; i++) {
    memo[i] = { num: Infinity, list: [] }
  }
  memo[0] = {
    num: 0,
    list: []
  }

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (coin <= i) {
        let cur = memo[i]
        let next = memo[i - coin]
        if (cur.num > next.num + 1) {
          memo[i].num = next.num + 1
          memo[i].list = [...next.list, coin]
        }
        // memo[i] = Math.min(memo[i], memo[i - coin] + 1)
      }
    }
  }
  let res = memo[amount]
  // log(memo)
  return (res.num === Infinity) ? { num: -1, result: null } : res
}


function test() {
  const coins = [1, 2, 5]
  const amount = 11
  let input = [13, [7, 9, 17]]
  log(change(...input))
  // log(change2(coins, amount))
}
test()