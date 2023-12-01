const fs = require('fs')

let content = fs.readFileSync('input.txt').toString().split("\n")

function Simple() {

  let sum = 0
  let i = 0
  let digit = ''

  while (content[i] != '') {

    for (let l = 0; l < content.length; l++) {
      if (content[i][l] >= '0' && content[i][l] <= '9') {
        digit += content[i][l]
        break
      }
    }

    for (let r = content.length - 1; r >= 0; r--) {
      if (content[i][r] >= '0' && content[i][r] <= '9') {
        digit += content[i][r]
        break
      }
    }

    sum += parseInt(digit)
    digit = ''
    i++
  }

  return sum

}

function Hard() {
  let sum = 0
  let i = 0
  let digit = ''

  let word = ''
  let obj = {'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven':7 , 'eight':8, 'nine':9}

  while (content[i] != '') {

    for (let l = 0; l < content.length; l++) {
      word += content[i][l]

      Object.entries(obj).forEach(entry => {
        const [key, value] = entry;
        if (word.includes(key)) {
          digit += value
        }
      });

      if (digit.length == 1) break

      if (content[i][l] >= '0' && content[i][l] <= '9') {
        digit += content[i][l]
        break
      }
    }

    word = ''

    for (let r = content.length - 1; r >= 0; r--) {

      word = content[i][r] + word

      Object.entries(obj).forEach(entry => {
        const [key, value] = entry;
        if (word.includes(key)) {
          digit += value
        }
      });

      if (digit.length == 2) break

      if (content[i][r] >= '0' && content[i][r] <= '9') {
        digit += content[i][r]
        break
      }
    }

    word = ''
    sum += parseInt(digit)
    digit = ''
    i++
  }

  return sum

}

console.log("PART ONE : ", Simple())
console.log("PART TWO : ", Hard())
