/*Concatenation of Array
Given an integer array nums of length n, you want to
create an array ans of length 2n where ans[i] == nums[i]
and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
Specifically, ans is the concatenation of two nums arrays.
Return the array ans.*/

var concatArray = (arr) => {
  let returnArray = [];
  let arrLen = arr.length;
  for (var i = 0; i < arrLen; i++) {
    returnArray[i] = arr[i];
    returnArray[i + arrLen] = arr[i];
  }
  //simplest approach is use concat method arr.concat(arr)/ arr.concat(...arr)
  return returnArray;
};

export default concatArray;
