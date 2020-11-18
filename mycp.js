// 1/
const fs = require('fs');
const path = require('path');

var arg1 = process.argv.slice(2)
var arg2 = process.argv.slice(3)

function copyFile (source, target) {
  const readStream = fs.createReadStream(source)
  const writeStream = fs.createWriteStream(target)

  readStream.pipe(writeStream)
}

const filename1 = arg1[0]
const filename2 = arg2[0]

copyFile(filename1, filename2)

// 2/
var arg1 = process.argv.slice(2)
var arg2 = process.argv.slice(3)

function parseArgs(args) {
  return args.join('').replace(/\-/g, '')
}

function copyFolderSync(source, target, options = { Roption : false }) {
  // check -r option enabled. If true make a new directory (can't copy files if there is no directory first)
  if (!options.Roption) {
    fs.mkdirSync(target);
  // copy each file from source dir to target dir
    fs.readdirSync(source).forEach(element => {
  // check if it is a file with path structure (dir1/hello.js)
  // if true => copy file into target dir
        if (fs.lstatSync(path.join(source, element)).isFile()) {
            fs.copyFileSync(path.join(source, element), path.join(target, element));
        }
    });
  }
}

function myCp(args) {
  const options = parseArgs(args3)

  const file = copyFolderSync(arg1[0], arg2[0], {
    Roption: options.includes('r'),
  })
}

const filename1 = arg1[0]
const filename2 = arg2[0]
copyFolderSync(filename1, filename2)
