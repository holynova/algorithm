const log = console.log.bind(console);
// monte carlo method to get pi
function pi(n = 10000) {
  let cnt = 0
  for (let i = 0; i < n; i++) {
    let x = Math.random()
    let y = Math.random()
    if (x * x + y * y <= 1) {
      cnt++
    }
  }
  return 4 * cnt / n
}

function test() {
  let times = [1e2, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8]
  for (let n of times) {
    log(`${n}, pi=${pi(n)}`)
  }
}
test()
