//path module is used when working with files

const path = require('path')

//getting file location of a given file name and it's directory
const fileLocation= path.join(__dirname, 'app.js')

console.log(fileLocation)

//get the file name in that folder location
const fileName= path.basename(fileLocation)
console.log(fileName)

//get the file extension name

console.log(path.extname(fileName))