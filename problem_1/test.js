const { assert } = require('chai')
const calculate = require('./calc.js')

describe('Sum of Multiples of 3 or 5', () => {
  for (let end = 10; end <= 100; end += 10) {
    let sum = 0
    for (let i = 1; i < end; ++i) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i
      }
    }
    it(`Sum until ${end} is ${sum}`, () => {
      assert.equal(calculate(end), sum)
    })
  }
})