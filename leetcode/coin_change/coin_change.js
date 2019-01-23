
const change = (sum = 0, coins = []) => {
  const allSolutions = []
  // const dict = {}
  const f = (n, curList = []) => {
    // if (n in dict) {
    //   return dict[n]
    // }

    // let res
    if (n === 0) {
      // res = 0 
      // one solution found
      allSolutions.push(curList)
      return 0
    } else if (n < 0) {
      return 'error'
      // res = 'error'
      // return res
    } else {
      // iteration
      // let branchArr = []
      for (let item of coins) {
        // 只从大到小 反向的剪掉
        let min = Math.min(...curList)
        if (item <= min) {
          let next = f(n - item, [...curList, item])
        }

        // res = next !== 'error' ? next + 1 : 'error'
      }
    }
    // dict[n] = res
    // return res
  }
  f(sum)
  console.log(allSolutions.length)
  return allSolutions
}

function test() {
  let res = change(100, [3, 5, 7, 8, 9, 10, 11])
  // console.log(res)
  let lengthList = res.map(s => s.length)
  console.log(Math.min(...lengthList))
  for (let s of res) {
    console.log({ len: s.length, list: s })
  }
}
function main() {
  test()
}
main()