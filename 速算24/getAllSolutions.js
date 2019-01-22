const log = console.log.bind(console)
const Combinatorics = require('js-combinatorics');

function range(start = 1, end = 13) {
  let arr = []
  for (let i = start; i <= end; i++) {
    arr.push(i)
  }
  return arr
}

log(range(1, 4))
let cmb = Combinatorics.combination(range(1, 13), 4)
log(cmb.toArray())

function getAll(start=1,end=13){
  
}
