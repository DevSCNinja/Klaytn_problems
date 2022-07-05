const { assert } = require('chai')
const calculate = require('./calc.js')

describe('Sum of Multiples of 3 or 5', () => {
  for (let end = 1; end <= 10; ++end) {
    let sum = Math.pow((end + 1) * end / 2, 2), i
    for (i = 1; i <= end; ++i) {
      sum -= i * i
    }
    it(`Sum until ${end} is ${sum}`, () => {
      assert.equal(calculate(end), sum)
    })
  }
})