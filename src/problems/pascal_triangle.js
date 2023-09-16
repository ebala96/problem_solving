var pascalTriangle = (rowValue) => {
  let returnArray = [];
  for (var i = 0; i < rowValue; i++) {
    let arr = [1];
    if (i == 0) {
      returnArray.push(arr);
    } else if (i == 1) {
      arr.push(1);
      returnArray.push(arr);
    } else {
      let currentValueArray = returnArray[i - 1];
      for (let j = 0; j < currentValueArray.length - 1; j++) {
        let val = currentValueArray[j] + currentValueArray[j + 1];
        arr.push(val);
      }
      arr.push(1);
      returnArray.push(arr);
    }
  }

  return returnArray;
  // faster approach
  //   const pascalsTriangles = [];
  //     if(numRows === 0) {
  //        return pascalsTriangles;
  //     }

  //     pascalsTriangles.push([1]);
  //     let last = [];
  //     while(pascalsTriangles.length < numRows) {
  //         let newEntry = [];
  //         newEntry[0] = 1;

  //         for(let i=0; i < last.length -1; i++) {
  //             newEntry[i+1] = last[i] + last[i+1];
  //         }
  //         newEntry.push(1);
  //         pascalsTriangles.push(newEntry);
  //         last  = newEntry;
  //     }
  //     return pascalsTriangles;
};

export default pascalTriangle;
