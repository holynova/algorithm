const debug = require('../utils/debugTools');
const log = debug.log
const timeIt = debug.timeIt

// recursion
function fib1(n) {
  if (n <= 2) {
    return 1
  } else {
    return fib1(n - 1) + fib1(n - 2)
  }
}
// dynanmic programming: recursion with memo
function fib2(n, memo = {}) {
  let res = memo[n]
  if (res) {
    return res
  } else if (n <= 2) {
    res = 1
  } else {
    res = fib2(n - 1, memo) + fib2(n - 2, memo)
  }
  memo[n] = res
  return res
}

// iteration
function fib3(n) {
  let arr = []
  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      arr[i] = 1
    } else {
      arr[i] = arr[i - 1] + arr[i - 2]
    }
  }
  return arr[n - 1]
}


// tail recursion 
function fib4(n, last_one, last_two) {
  function fibProcess(n, prev, prevPrev) {
    if (n === 0) {
      return prev
    } else {
      return fib4(n - 1, prevPrev, prev + prevPrev)
    }
  }

  return fibProcess(n, 1, 1)
  // if (n <= 2) {
  //   return 1
  // } else {
  //   let lastTwo = fib()
  //   return fib4(n - 1) + fib4(n - 2)
  //   let cur = last_one + last_two

  //   return fib4()
  // }

}

// generator 
function fib5(n) {

  function* fibGen() {

    yield 1
    yield 1
    let last_one = 1
    let last_two = 1
    while (true) {
      let cur = last_one + last_two
      yield cur
      last_two = last_one
      last_one = cur
    }
  }
  let cnt = 0
  let g = fibGen()
  for (let o of g) {
    if (cnt === n - 1) {
      return o
    }
    cnt++
  }
}


const test = () => {
  log({
    1: fib1(4),
    2: fib2(4),
    3: fib3(4),
    4: fib4(4),
    5: fib5(4),
  })
  let fnList = [fib5, fib4, fib3, fib2, fib1]
  for (let fn of fnList) {
    timeIt(fn, [32], 1000)
  }
};
test()