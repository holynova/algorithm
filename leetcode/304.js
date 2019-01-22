
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function () {
  this.hash = {}
  // this.matrix = matrix 
  // this.createNew = function () {
  //   // console.log('run')

  // }

};

NumMatrix.createNew = function (matrix) {
  let hash = this.hash
  let m = matrix
  let maxRow = m.length - 1
  let maxCol = m[0].length - 1
  for (let row = 0; row <= maxRow; row++) {
    for (let col = 0; col <= maxCol; col++) {
      let key = `${row},${col}`
      let cell = m[row][col]
      let value
      if (col !== 0) {
        value = hash[`${row},${col - 1}`] + cell
      } else {
        if (row !== 0) {
          value = hash[`${row - 1},${maxCol}`] + cell
        } else {
          value = cell
        }
      }
      hash[key] = value
    }
  }
  // this.hash = hash
  return new NumMatrix()
  // return new NumMatrix()
  // this.hash = hash
  // console.log(hash)
  // return { hash }
}

/** 
* @param {number} row1 
* @param {number} col1 
* @param {number} row2 
* @param {number} col2
* @return {number}
*/
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let leftTop = this.hash[`${row1 - 1},${col1 - 1}`]
  let left = this.hash[`${row2 - 1},${col1 - 1}`]
  let top = this.hash[`${row1 - 1},${col2 - 1}`]
  return left + top - leftTop
};

/** 
* Your NumMatrix object will be instantiated and called as such:
* var obj = Object.create(NumMatrix).createNew(matrix)
* var param_1 = obj.sumRegion(row1,col1,row2,col2)
*/
var matrix = [[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]

// var obj = Object.create(NumMatrix).createNew(matrix)
var o1 = Object.create(NumMatrix).createNew(matrix)
console.log(o1.sumRegion(1, 1, 2, 2))

var o2 = new NumMatrix()
console.log({ o1: o1.__proto__, o2 })
