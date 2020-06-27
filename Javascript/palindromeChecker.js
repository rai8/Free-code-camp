//palindrome is  word that is spelled both the same backward and forward ignoring the punctuation

function palindrome(str){
    let polishedString=str.replace(/\W+|_/g, '').toLowerCase()
    let reversedString=polishedString.split('').reverse().join('').toLowerCase()
    //console.log(polishedString , reversedString)
   return (polishedString === reversedString)?  true :  false
    
}


console.log(palindrome('_eye'))