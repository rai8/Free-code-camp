function checkObj(obj, checkProp) {
    
    var obj={
      "gift": "pony", 
      "pet": "kitten", 
      "bed": "sleigh",
      "city": "Seattle"
    }
    if (obj.hasOwnProperty(checkProp)){
      return obj[checkProp];
    }
    else{
      return "Not Found"
    }
  
    return "Change Me!";
    
  }

  console.log()