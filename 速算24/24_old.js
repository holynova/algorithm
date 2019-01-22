
const log = console.log.bind(console)

class Calculator {
  constructor(target = 24, threshold = 1e-6) {
    // this.arr = [...arr]
    this.target = target
    this.threshold = threshold
    this.results = []
  }
  setArr(arr) {
    this.results = []
    this.arr = [...arr]
  }
  split(input) {
    if (Array.isArray(input) && input.length > 0) {
      // 数组切分
      let len = input.length
      if (len === 4) {

      } else if (len === 3) {

      } else if (len === 2) {

      } else if (lne === 1) {

      }
    } else if (typeof input === 'number') {
      return input
    }
  }

  splitInto2x2() {
    let results = []
    let indexs = [
      [0, 1, 2, 3],
      [0, 2, 1, 3],
      [0, 3, 1, 2]]
    for (let pattern of indexs) {
      let left = []
      let right = []

      left.push(this.arr[pattern[0]])
      left.push(this.arr[pattern[1]])
      right.push(this.arr[pattern[2]])
      right.push(this.arr[pattern[3]])
      results.push({ left, right })
    }
    return results
  }

  calculate2x2() {
    let groups = this.splitInto2x2()
    for (let group of groups) {
      let { left, right } = group
      let leftResults = this.iterTwo(...left)
      let rightResults = this.iterTwo(...right)
      // log({ leftResults, rightResults })

      for (let leftResult of leftResults) {
        for (let rightResult of rightResults) {
          let finalResults = this.iterTwo(leftResult, rightResult)
          for (let finalResult of finalResults) {
            if (this.isEqual(finalResult.result, this.target)) {
              this.results.push(finalResult.formula)
            }
          }
        }
      }
    }
  }


  isEqual(a, b) {
    return Math.abs(a - b) <= this.threshold
  }

  toObj(o) {
    if (typeof o === 'object') {
      return o
    } else if (typeof o === 'number') {
      return {
        result: o,
        formula: `${o}`
      }
    } else {
      log(o)
      throw new Error('toObj输入参数错误:input = ' + JSON.stringify(o))
    }
  }


  iterTwo(left, right) {
    const { result: l, formula: lf } = this.toObj(left)
    const { result: r, formula: rf } = this.toObj(right)
    let results = [
      { result: l + r, formula: `(${lf} + ${rf})` },
      { result: l - r, formula: `(${lf} - ${rf})` },
      { result: r - l, formula: `(${rf} - ${lf})` },
      { result: l * r, formula: `${lf} * ${rf}` },
    ]

    // 分母不能为零
    if (r !== 0) {
      results.push({ result: l / r, formula: `${lf} / ${rf}` })
    }
    if (l !== 0) {
      results.push({ result: r / l, formula: `(${rf} / ${lf})` })
    }
    return results
  }

  calculate1x1() {
    let groups = this.splitInto2x2()
    for (let group of groups) {
      let { left, right } = group
      let [second, third] = right
      // log({ left, second, third })

      let firstStepResults = this.iterTwo(...left)
      for (let firstStepResult of firstStepResults) {
        let secondStepResults = this.iterTwo(firstStepResult, second)
        for (let secondStepResult of secondStepResults) {
          let thirdStepResults = this.iterTwo(secondStepResult, third);
          for (let thirdStepResult of thirdStepResults) {
            if (this.isEqual(thirdStepResult.result, this.target)) {
              this.results.push(thirdStepResult.formula)
            }
            // this.results.push(`${thirdStepResult.formula} = ${thirdStepResult.result}`)
          }
        }
      }
    }
  }

  go() {
    this.calculate2x2()
    this.calculate1x1()
    if (this.results.length > 0) {
      return this.results
    } else {
      return false
    }
  }
}

let c = new Calculator()
let inputs = [
  // [5, 5, 5, 1],
  // [3, 3, 8, 8],
  [4, 4, 10, 10],
  [10, 10, 4, 4],
  // [1, 5, 5, 5],
  // [2, 3, 4, 5],
  // [2, 3, 4, 8],
]


for (let input of inputs) {
  c.setArr(input)
  let results = c.go()
  log(input.join(','))
  log(results)
  log('-----------------')
}
// log(c.go())
// c.calculate2x2()
// log(c.iterTwo(
//   { result: -1, formula: '(1 - 2)' },
//   { result: 7, formula: '(3 + 4)' }))


