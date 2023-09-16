// Number of Good Pairs
// Given an array of integers nums, return the number of
// good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

var goodPairs = (arr) => {
  let arrLen = arr.length;
  let goodPairs = 0;
  for (var i = 0; i < arrLen; i++) {
    for(var j = i+1; j < arrLen; j++){
        if(arr[i] == arr[j] && i < j){
            goodPairs++
        }
    }
  }
  return goodPairs;
};

export default goodPairs;
