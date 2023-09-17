// Reverse Words in a String
// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters.
// The words in s will be separated by at least one space

//Using two pointers approach
var reverseString = (str) => {
  //   let trimmedString = str.trim();
  //   let stringToArray = trimmedString.split(" ");
  //   let filteredArray = stringToArray.map((value) => value);
  //   let reversedArray = filteredArray.reverse();
  //   let joinedString = reversedArray.join(" ");
  //   return joinedString;
  let stringArray = str.split(" ").filter((str) => str.length !== 0);
  let left = 0;
  let right = stringArray.length - 1;
  let temp;
  while (left < right) {
    temp = stringArray[left];
    stringArray[left] = stringArray[right];
    stringArray[right] = temp;
    left += 1;
    right -= 1;
  }
  return stringArray.join(" ");
};

export default reverseString;
