const fs = require('fs')

let content = fs.readFileSync('input.txt').toString().split("\n")

let i = 0
let one = 0
let two = 0
let instances = Array(content.length-1).fill(1)

while (content[i] != 0) {

  let str = content[i].substr(content[i].indexOf(': ') + 2).replaceAll("  ", " ").split(" | ")

  let counter = 0

  str[0].split(" ").forEach((item) => {
    let validate = str[1].split(" ")
    if (validate.includes(item)) {
      counter++
    }
  });

  for (let j = i; j < i + counter; j++) {
    instances[j+1] += instances[i]
  }

  one += (counter == 0) ? 0 : 2 ** (counter - 1)
  two += instances[i]

  i++

}

console.log(one)
console.log(two)
