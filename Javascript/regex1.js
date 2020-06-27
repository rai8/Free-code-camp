//regex are special strings that represent a search pattern
//also known as regex
// using the test method
let string="Hello World"
let myRgex=/Hello/

console.log(myRgex.test(string))
/* 
flags used
g-for global (repeated items)
i- for  case insesitive
[]- multiple items to be searched
/w - match all alphanuric values
\W - match all aphanumeric characters values
\d - search for digit values
\D -search for non digit values
\s - search for white spaces
\S - count non white spaces
*/