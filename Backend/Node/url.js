const url= require('url')

const address= "http://localhost:8080/default.html?year=2017&month=february"

//to work with url we have to first parse the address

const parsedAddress= url.parse(address, true)
console.log(parsedAddress)