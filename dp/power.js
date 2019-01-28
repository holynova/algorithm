// import { log, timeIt } from '../../utils/debugTools'
const tools = require('../../utils/debugTools');
const { log, timeIt } = tools
function power1(num, e) {
  if (e === 0) {
    return 1
  }
  return power1(num, e - 1) * num
}

function power2(num, e) {
  if (e === 0) {
    return 1
  }
  let i = 0
  let res = 1
  while (i < e) {
    res *= num
    i++
  }
  return res
}

function power3(num, e) {
  let memoDict = {}
  memoDict[0] = 1
  memoDict[1] = num


  function f(number, exp, memo) {
    if (memo[exp]) {
      return memo[exp]
    }
    let half = Math.floor(exp / 2)
    let left = half
    let right = exp - left
    // log({ left, right })
    let res = f(number, left, memo) * f(number, right, memo)
    memo[exp] = res
    return res
  }

  return f(num, e, memoDict)
}

function test() {
  let input = [9999885, 12]
  let funcList = [power1, power2, power3]
  for (let f of funcList) {
    timeIt(f, input)
  }
  log(power1(...input))
  log(power2(...input))
  log(power3(...input))
}

test()