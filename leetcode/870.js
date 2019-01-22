var advantageCount = function (A, B) {
  function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  // make B hash:   value: index
  let len = A.length
  const dict = {}
  const cloneDict = {}
  for (let i = 0; i < B.length; i++) {
    let key = B[i]
    if (!dict[key]) {
      dict[key] = [i]
      cloneDict[key] = [i]

    } else {
      dict[key].push(i)
      cloneDict[key].push(i)
    }
  }

  // sort
  const a = A.sort((a, b) => a - b)
  const b = B.sort((a, b) => a - b)

  const result = []
  for (let i = 0; i < len; i++) {
    result.push('$')
  }
  // find the advantage


  const rest = []
  let i = 0
  for (let j = 0; j < len; j++) {
    while (a[i] <= b[j] && i < len) {
      // rest.push(a[i])
      i += 1
    }
    // 找完了
    if (i >= len) {
      break
    } else {
      // 找到大的了
      let index = dict[b[j]].pop()
      swap(a, index, i)
      // result[index] = a[i]
      // swap


      i += 1
    }
  }

  // // fill the result with rest arr
  // let restIndex = 0
  // for (let i = 0; i < len; i++) {
  //   if (result[i] === '$') {
  //     result[i] = rest[restIndex]
  //     restIndex += 1
  //   } else {
  //     continue
  //   }
  // }
  for (let i = 0; i < len; i++) {
    let key = b[i]
    let index = cloneDict[key].pop()
    result[index] = a[i]
  }

  return result
};



function test() {
  // const A = [12, 24, 8, 32]
  // const B = [13, 25, 32, 11]
  const A = [2, 7, 11, 15], B = [1, 10, 4, 11]
  // const A = [2, 0, 4, 1, 2]
  // const B = [1, 3, 0, 0, 2]
  const result = advantageCount(A, B)
  console.log(result)
}

test()