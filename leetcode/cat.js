function Cat() {
  this.name = 'cat name'
  this.say = function () {
    console.log(this.name)
  }
}

let c1 = new Cat()
let c2 = Object.create(Cat)
let c3 = {}
c3.prototype = Cat
console.log({ c1, c2, c3 });


// console.log(JSON.stringify({ c1, c2 }, null, 2))