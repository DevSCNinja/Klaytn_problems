const sumOfSquare = num => {
  //1 ^ 2 + 2 ^ 2 + ... + n ^ 2 = n * (n + 1) * (2 * n + 1) / 6
  return num * (num + 1) * (2 * num + 1) / 6
}

const squareOfSum = num => {
  //(1 + 2 + ... + n) ^ 2 = ((1 + n) / n) ^ 2
  return Math.pow((num + 1) * num / 2, 2)
}

const calculate = num => {
  return squareOfSum(num) - sumOfSquare(num)
}

module.exports = calculate