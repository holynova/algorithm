const fs = require('fs')
const log = console.log.bind(console)
function countOne(n) {
  let res = 0
  while (n) {
    res += n % 2
    n = Math.floor(n / 2)
  }
  return res
}

// let uint32 = new Uint32Array(1)
// uint32[0] = 1



// for (let i = 0; i < 35; i++) {
//   let n = 1 << i
//   let str = n.toString(2)
//   log(i, n, str)
// }



// log((2 ** 32).toString(2))
function genDict(exp = 8) {
  let dict = {}
  let max = 2 ** exp
  for (let i = 0; i <= max; i++) {
    dict[i] = countOne(i)
  }
  return dict
}

function saveToFile(data) {
  let timeStamp = new Date().getTime()
  let fileName = `data${timeStamp}.json`
  let json = JSON.stringify(data)
  fs.writeFileSync(fileName, json)
  log(`save  to ${fileName}, size ${json.length}`)
}

function main() {
  let dict = genDict(16)
  // log(dict)
  saveToFile(dict)
}
main()
// log(JSON.stringify(dict, null, 2))