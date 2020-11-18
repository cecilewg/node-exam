// 1
const fs = require('fs');
const path = require('path')

function listFiles() {
  fs.readdir((process.cwd()), (err, files) => {
    files.forEach(file => {
      if(fs.lstatSync(file).isFile()) {
        console.log(file)
      }
    })
  })
}

listFiles()

// 2
let arg = process.argv.slice(2)

function listFilesInDirectory(targetFolder) {
  fs.readdir(targetFolder, (err, files) => {
    files.forEach(file => {
      console.log(file)
    })
  })
}

const folderName = arg[0]
listFilesInDirectory(folderName)

// 3
function listHiddenFiles(targetFolder) {
  if(process.argv[2] === "-a" {
    fs.readdir(targetFolder, (err, files) => {
      files.forEach(file => {
        console.log(file)
      })
    })
  }
}
