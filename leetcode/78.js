

const subsets1 = function (nums) {
  if (nums.length >= 3) {
    let results = []
    let arr = nums.sort((a, b) => a - b)
    let round1 = [[], [arr[0]], [arr[1]], [arr[0], arr[1]]]
    results = [...round1]
    let prevNum = arr[1]
    let roundCnt = round1.length

    for (let i = 2; i < arr.length; i++) {
      let clone = []
      let curNum = arr[i]
      let startIndex = 0
      if (curNum !== prevNum) {
        startIndex = 0
        roundCnt = results.length
      } else {
        startIndex = results.length - roundCnt
      }

      for (let j = startIndex; j < results.length; j++) {
        let sub = [...results[j], curNum]
        clone.push(sub)

      }
      results = [...results, ...clone]
    }
    return results
  } else if (nums.length === 2) {
    return [[], [nums[0]], [nums[1]], [nums[0], nums[1]]]
  } else if (nums.length === 1) {
    return [[], nums[0]]
  } else {
    return []
  }

};




const subsets = (nums) => {
  const getRoundCnt = (roundNum, repeatTimes = 0) => {
    // console.log({ roundNum, repeatTimes })
    let n = roundNum - repeatTimes
    if (n >= 0) {
      return 2 ** n
    } else {
      console.log('error')
    }
  }
  let arr = nums.sort((a, b) => a - b)
  let results = []
  results.push([])

  let roundCnt = 1
  let prevNum = null
  let repeatTimes = 0
  for (let i = 0; i < arr.length; i++) {
    let curNum = arr[i]
    if (curNum !== prevNum) {
      startIndex = 0
      // roundCnt = results.length
    } else {
      repeatTimes += 1
      startIndex = results.length - getRoundCnt(i, repeatTimes)
    }

    let clone = []
    for (let j = startIndex; j < results.length; j++) {
      let sub = [...results[j], curNum]
      clone.push(sub)
    }
    results = [...results, ...clone]
    prevNum = curNum
  }
  return results;

}


let input = [1, 2, 2, 2]
let result = subsets(input)
console.log(JSON.stringify(result))


// [1, 2, 3, 4]
// _
// 1
// 2
// 1, 2

// 3
// 1, 3
// 2, 3
// 1, 2, 3

// 4
// 1, 4
// 2, 4
// 1, 2, 4
// 3, 4
// 1, 3, 4
// 2, 3, 4
// 1, 2, 3, 4


// 3
// 1, 3
// 2, 3
// 1, 2, 3
// 3, 3
// 1, 3, 3
// 2, 3, 3
// 1, 2, 3, 3
