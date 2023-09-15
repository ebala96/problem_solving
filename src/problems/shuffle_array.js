// Shuffle the Array
// Given the array nums consisting of 2n elements in the
// form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

var shuffleArray = (arr) => {
  let midLen = arr.length / 2;
  let returnArray = [];
  for (var i = 0; i < midLen; i++) {
    returnArray[2 * i] = arr[i];
    returnArray[2 * i + 1] = arr[i + midLen];
  }
  return returnArray;
};

export default shuffleArray;
