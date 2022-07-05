const getSum = (interval, end) => {
  const count = Math.floor(end / interval)
  return (1 + count) * count * interval / 2
}

const calculate = num => {
  //Sum of Multiples of 3 or 5 = Sum of Multiples of 3 + Sum of Multiples of 5 - Sum of Multiples of 15
  return getSum(3, num - 1) + getSum(5, num - 1) - getSum(15, num - 1)
}

module.exports = calculate