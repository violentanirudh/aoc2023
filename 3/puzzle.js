const fs = require('fs')

let content = fs.readFileSync('input.txt').toString().split("\n")

let sum = 0
let i = 0
let gears = 0

const symbols = ['*', '=', '%', '&', '@', '#', '$', '-', '+', '/']

function numValue(i, x) {
  let num = ''

  while (content[i][x] >= '0' && content[i][x] <= '9' && x < content[i].length) {
    num += content[i][x]
    x++
  }

  return parseInt(num)
}

function search(i, x) {

  while (content[i][x-1] >= '0' && content[i][x-1] <= '9' && x > 0) {
      x--
  }

  return numValue(i, x)

}
//
// while (content[i] != '') {
//
//   for (let x = 0; x < content[i].length; x++) {
//
//     if (symbols.includes(content[i][x])) {
//
//       if (content[i][x-1] >= '0' && content[i][x-1] <= '9') {
//         sum += search(i, x-1)
//       }
//
//       if (content[i][x+1] >= '0' && content[i][x+1] <= '9') {
//         sum += search(i, x+1)
//       }
//
//       if (content[i-1][x] >= '0' && content[i-1][x] <= '9') {
//         sum += search(i-1, x)
//       } else {
//         if (content[i-1][x-1] >= '0' && content[i-1][x-1] <= '9') {
//           sum += search(i-1, x-1)
//         }
//         if (content[i-1][x+1] >= '0' && content[i-1][x+1] <= '9') {
//           sum += search(i-1, x+1)
//         }
//       }
//
//       if (content[i+1][x] >= '0' && content[i+1][x] <= '9') {
//         sum += search(i+1, x)
//       } else {
//         if (content[i+1][x-1] >= '0' && content[i+1][x-1] <= '9') {
//           sum += search(i+1, x-1)
//         }
//         if (content[i+1][x+1] >= '0' && content[i+1][x+1] <= '9') {
//           sum += search(i+1, x+1)
//         }
//       }
//
//     }
//
//   }
//
//   i++
//
// }

while (content[i] != '') {

  for (let x = 0; x < content[i].length; x++) {

    let adj = 0

    if (content[i][x] == '*') {

      if (content[i][x-1] >= '0' && content[i][x-1] <= '9') {
        adj = search(i, x-1)
      }

      if (content[i][x+1] >= '0' && content[i][x+1] <= '9') {
        if (adj != 0) {
          sum += adj * search(i, x+1)
          continue
        }
        adj = search(i, x+1)
      }

      if (content[i-1][x] >= '0' && content[i-1][x] <= '9') {
        if (adj != 0) {
          sum += adj * search(i-1, x)
          continue
        }
        adj = search(i-1, x)
      } else {
        if (content[i-1][x-1] >= '0' && content[i-1][x-1] <= '9') {
          if (adj != 0) {
            sum += adj * search(i-1, x-1)
            continue
          }
          adj = search(i-1, x-1)
        }
        if (content[i-1][x+1] >= '0' && content[i-1][x+1] <= '9') {
          if (adj != 0) {
            sum += adj * search(i-1, x+1)
            continue
          }
          adj = search(i-1, x+1)
        }
      }

      if (content[i+1][x] >= '0' && content[i+1][x] <= '9') {
        if (adj != 0) {
          sum += adj * search(i+1, x)
          continue
        }
        adj = search(i+1, x)
      } else {
        if (content[i+1][x-1] >= '0' && content[i+1][x-1] <= '9') {
          if (adj != 0) {
            sum += adj * search(i+1, x-1)
            continue
          }
          adj = search(i+1, x-1)
        }
        if (content[i+1][x+1] >= '0' && content[i+1][x+1] <= '9') {
          if (adj != 0) {
            sum += adj * search(i+1, x+1)
            continue
          }
          adj = search(i+1, x+1)
        }
      }

    }

  }

  i++

}

console.log(sum)
