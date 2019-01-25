function acc(n) {
  if (n === 1) {
    return 1
  } else {
    return n + acc(n - 1)
  }
}

function acc2(n, prev) {
  if (n === 0) {
    return prev
  } else {
    return acc2(n - 1, prev + n)
  }
}

function fact(n) {
  if (n <= 1) {
    return 1
  } else {
    return fact(n - 1) * n
  }
}

function factTail(n, prev) {
  if (n <= 1) {
    return prev
  } else {
    return factTail(n - 1, prev * n)
  }
}

console.log(acc(100))
console.log(acc2(100, 0))
console.log(fact(15))
console.log(factTail(15, 1))