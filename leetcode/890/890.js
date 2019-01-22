// words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
const log = console.log.bind(console)
const convert = (str) => {
  let cnt = 0
  let dict = {}
  let result = ''
  for (let char of str) {
    if (!dict.hasOwnProperty(char)) {
      dict[char] = cnt
      cnt++
    }
    result += dict[char] + ','
    // result += dict[char]
  }
  log(result, JSON.stringify(dict, null, 2))
  log(result)
  return result
}

let str = 'thequickbrownfoxjumpsoverthelazydog'
let str2 = 'thequickbrownfhtxjumpsoverthelazydog'
let a = convert(str)
let b = convert(str2)
log(JSON.stringify({ a, b, c: a === b }, null, 2))