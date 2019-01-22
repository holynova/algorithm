var pushDominoes = function (dominoes) {
  let arr = dominoes.split('')
  // let result = ''
  let i = 0
  let j = i + 1

  let lo
  let hi


  while (j < arr.length) {
    lo = arr[i]
    hi = arr[j]
    let str = lo + hi
    if (j + 1 > arr.length && lo === 'R') {
      // 全R
      for (let k = i; k < arr.length; k++) {
        arr[k] = 'R'
      }
      j++
    } else if (hi === '.') {
      j++

    } else {
      switch (str) {
        case '.L':
        case 'LL':
          //全L
          for (let k = i; k < j; k++) {
            arr[k] = 'L'
          }

          break;
        case 'RR':
          // 全R
          for (let k = i; k < j; k++) {
            arr[k] = 'R'
          }
          break;
        case 'RL':
          // 居中处理
          let mid = (i + j) / 2
          for (let k = i + 1; k < j; k++) {
            if (k < mid) {
              arr[k] = 'R'
            } else if (k > mid) {
              arr[k] = 'L'
            } else {
              //保持不变
            }
          }
          break;
        default:
          break;
      }
      i = j
      j = i + 1


    }
  }
  return arr.join('')
};

let input = '.L.R...LR..L..'
// let input = 'RR.L'

console.log(pushDominoes(input))