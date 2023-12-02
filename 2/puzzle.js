const fs = require('fs')

let content = fs.readFileSync('input.txt').toString().split('\n')

function one() {
  
  let sum = 0
  let i = 0

  const limit = {red: 12, blue: 14, green: 13}

  while (content[i] !=  '') {

    let exceed = false

    let str = content[i].substr(content[i].indexOf(': ') + 2)
    let word = str.match(/(\w+)/g)

    for (let j = 1; j <= word.length; j += 2) {
      if (parseInt(word[j - 1]) > limit[word[j]]) {
        exceed = true
        break
      }
    }

    if (!exceed) sum += i + 1

    i++

  }

  return sum

}

function two() {

  let sum = 0
  let i = 0

  while (content[i] != '') {

    let counter = {red: 0, blue:0, green: 0}

    let str = content[i].substr(content[i].indexOf(': ') + 2)
    let word = str.match(/(\w+)/g)

    for (let j = 1; j <= word.length; j += 2) {
        if (parseInt(word[j - 1]) > counter[word[j]]) {
            counter[word[j]] = parseInt(word[j-1])
        }
    }

    sum += counter.red * counter.blue * counter.green

    i++
  }

  return sum

}

console.log(one())
console.log(two())
