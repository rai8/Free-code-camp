function titleCase(str) {
    let arr=str.toLowerCase().split(" ")
    console.log(arr)
    for (let i=0;i<arr.length; i++){
      arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
      str=arr.join(" ")
    }
    return str;
  }
  
  console.log(titleCase("I'm a little tea pot"));
  