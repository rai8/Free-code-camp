//used to work with file systems-- create, modify and delete files

const fs= require('fs')


//takes 3 parameter-- name of file, value in it and a call back function
/* fs.writeFile('message.txt','Hello there rythonne',(err)=>{
  if (err) throw err

  console.log('File has been written')
}) */

//takes  parameters-- the file and the encoding and a call back function
//callback takes 2 parameters- err and data(vaues in the file)

fs.readFile("./message.txt",'utf8', (err, data)=>{
    if(err) throw err
    console.log(data)
})