const log = console.log.bind(console);


function change(amount, coins = [], ) {
  let memo = {}
  let solutions = []
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


function getAll(amount, coins = [], ) {
  let memo = {}
  memo[0] = [[]]
  for (let i = 1; i <= amount; i++) {
    memo[i] = []
    for (let coin of coins) {
      if (coin <= i) {
        let subsets = memo[i - coin]
        // log({ coin, amount, subsets })
        for (let subset of subsets) {
          memo[i].push([...subset, coin])
        }
      }
    }
  }
  return memo[amount]




  // let memo = {}
  // let solutions = []
  // for (let i = 1; i <= amount; i++) {
  //   memo[i] = { num: Infinity, list: [] }
  // }

  // memo[0] = {
  //   num: 0,
  //   list: []
  // }

  // for (let i = 1; i <= amount; i++) {
  //   for (let coin of coins) {
  //     if (coin <= i) {
  //       let cur = memo[i]
  //       let next = memo[i - coin]
  //       if (cur.num > next.num + 1) {
  //         memo[i].num = next.num + 1
  //         memo[i].list = [...next.list, coin]
  //       }
  //       // memo[i] = Math.min(memo[i], memo[i - coin] + 1)
  //     }
  //   }
  // }

  // let res = memo[amount]
  // // log(memo)
  // return (res.num === Infinity) ? { num: -1, result: null } : res
}

function test() {
  // const coins = [1, 2, 5]
  // const amount = 11
  let input1 = [6, [2, 3, 4]]
  let input2 = [13, [2, 7, 9, 17]]
  log(change(...input1))
  log(getAll(...input1))

  // log(change2(coins, amount))
}
test()