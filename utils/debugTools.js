const log = console.log.bind(console);
// const timeIt = 
const timeOnce = (fn = () => { }, args = []) => {
  let start = new Date().getTime()
  fn(...args)
  return (Date.now() - start) / 1000
};

// 
const timeIt = (fn, args = [], times = 1000, maxTime = 2) => {
  let timeArr = []
  let totalTime = 0
  // let testCnt = 0
  let totalTest = times
  for (let i = 0; i < times; i++) {
    let time = timeOnce(fn, args)
    timeArr.push(time)
    totalTime += time
    if (totalTime >= maxTime) {
      totalTest = i + 1
      break;
    }
  }
  let average = timeArr.reduce((prev, cur) => prev + cur, 0) / totalTest
  log(`${fn.name} x ${totalTest} times, average time:${average}s`)
}

module.exports = {
  timeIt, timeOnce, log
}