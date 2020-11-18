const fs = require('fs');
const readline = require('readline');

// 1/
var args = process.argv.slice(1)

function myCat(filename) {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  rl.on('line', function(line) {
      console.log(line);
  })
}

const fileName1 = args[0]
console.log(myCat(fileName1))

// // 2/
var args2 = process.argv.slice(2)

function myCat2 (filename) {
  try {
    const data = fs.readFile(filename, 'utf8', (error,data) => {
      console.log(data)
    })
  } catch (err) {
    console.error(err)
  }
}

const fileName2 = args2[0]
console.log(myCat2(fileName2))

// 3/
var args3 = process.argv.slice(3)

function parseArgs(args3) {
  return args3.join('').replace(/\-/g, '') // aRp
}

function addDollarSign(filename, options = { dollarSign: false}) {
  // Check -e option is enabled, if true add $ to every line break
  if (!options.dollarSign) {
    var allLines = fs.readFileSync(filename).toString().split('\n');
    allLines.forEach(function (line) {
      var newLine = line + "$";
      console.log(newLine);
    });
  }
}

function myCat3(args) {
  const options = parseArgs(args3)

  const files = addDollarSign(args3[0], {
    dollarSign: options.includes('e'),
  })
}

const fileName3 = args3[0]
console.log(myCat3(fileName3))
