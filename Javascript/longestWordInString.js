function findLongestWordLength(str) {
    let lengths = str.split(' ').map(word => word.length)
     return Math.max(...lengths)
   }
   
   findLongestWordLength("The quick brown fox jumped over the lazy dog");
    console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))