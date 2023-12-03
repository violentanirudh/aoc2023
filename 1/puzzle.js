const fs = require('fs')

let content = fs.readFileSync('input.txt').toString().split("\n")

function first(str) {
  for (let l = 0; l < str.length; l++) {
    let char = str[l]
    if (char >= '1' && char <= '9') {
      return parseInt(char) * 10
    }
  }
}

function last(str) {
  for (let r = str.length - 1; r >= 0; r--) {
    let char = str[r]
    if (char >= '1' && char <= '9') {
      return parseInt(char)
    }
  }
}

function one() {

  let sum = 0
  let i = 0

  while (content[i] != '') {

    sum += first(content[i])
    sum += last(content[i])

    i++
  }

  return sum

}

function two() {

  let sum = 0
  let i = 0

  let obj = {
    one: 'o1e',
    two: 't2w',
    three: 't3e',
    four: 'f4r',
    five: 'f5e',
    six: 's6x',
    seven: 's7n',
    eight: 'e8t',
    nine: 'n9e'
  }

  while (content[i] != '') {

    Object.keys(obj).forEach(function (item) {
      if (content[i].includes(item)) {
        content[i] = content[i].replaceAll(item, obj[item])
      }
    })

    sum += first(content[i])
    sum += last(content[i])

    i++

  }

  return sum

}


console.log(one())
console.log(two())
