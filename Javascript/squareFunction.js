const squareList = (arr) => {
    // Only change code below this line
    return arr.filter(isPositive).filter(isDecimal).map(square);
    // Only change code above this line
  };
  function square(num){
    return num*num
  }
  function isPositive(num){
    return num>=0
  }
  function isDecimal(num){
    return Math.floor(num)===num
  }
  console.log(isPositive(-1))
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);
  