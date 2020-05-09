var fs = require('fs')

var greet = fs.readFileSync(`${__dirname}/greet.txt`, 'utf8')
console.log(greet)

var greet2 = fs.readFile(`${__dirname}/greet.txt`,
  function (err, data) {
    if (err) {
      console.log(err.message)
    }
    console.log(data)
  })

// console.log(greet2)
