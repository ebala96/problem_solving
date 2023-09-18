// Longest Common Prefix
// Write a function to find the longest common prefix string
// amongst an array of strings.
// If there is no common prefix, return an empty string "".

var longestCommonPrefix = (strs) => {
  // var smallestStr = Number.MAX_SAFE_INTEGER;
  // var smallestIndex;
  // strs.forEach((str, index) => {
  //   if (str.length < smallestStr) {
  //     smallestStr = str.length;
  //     smallestIndex = index;
  //   }
  // });
  // var strArray = strs[smallestIndex].trim().split("");
  // var prefix = [];
  // var contains = false;
  // for (let i = 0; i < strArray.length; i++) {
  //   for (let j = 0; j < strs.length; j++) {
  //     var stttrrArray = strs[j].trim().split("");
  //     if (stttrrArray[i] == strArray[i]) {
  //       contains = true;
  //     } else {
  //       contains = false;
  //       break;
  //     }
  //   }
  //   if (contains) {
  //     prefix.push(strArray[i]);
  //   } else {
  //     return prefix.length > 0 ? prefix.join("") : "";
  //   }
  // }

  for (let i = 0; i < strs[0].length; i++) {
    for (let str of strs) {
      if (str[i] !== strs[0][i]) {
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];
};

export default longestCommonPrefix;
