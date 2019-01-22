var maxSubArray = function (nums) {
  let lo = 0
  let hi = 0
  let sum = nums[0]
  let maxSum = sum

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i]
    if (num > 0) {
      sum += num
      if (sum > maxSum) {
        maxSum = sum
        hi = i
      }
    } else if (num < 0) {
      sum += num
    }
  }
  //此时找到了最右边界
  lo = hi
  sum = nums[hi]
  maxSum = sum

  for (let i = nums.length - 1; i >= 0; i--) {
    let num = nums[i]
    if (num > 0) {
      sum += num
      if (sum > maxSum) {
        maxSum = sum
        lo = i
      }
    } else if (num < 0) {
      sum += num
    }
  }
  //此时找到了lo
  sum = 0
  for (let i = lo; i <= hi; i++) {
    sum += nums[i]
  }
  console.log(lo, hi, sum)
  return sum

};
let input = [-2, -1]
maxSubArray(input)