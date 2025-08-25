function maximum(arr) {
    for (let i = 0; i < arr.length; i = i + 3) {
     
      const subarray = arr.slice(i, i + 3);
    //   console.log(subarray);
      
      
      const maxVal = Math.max(...subarray);
      
      console.log(`${subarray} -> ${maxVal}`);
    }
  }
  let a = [12, 15, 16, 14, 12, 24, 12];
  maximum(a);