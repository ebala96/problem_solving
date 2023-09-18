// Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.

var longestPalindromicSubString = (str) => {
  let stringLength = str.length;
  let returnString = "";
  for (let i = 0; i < stringLength; i++) {
    checkPalindrom(i, i); //odd palindrome we start with same index and traverse left and right
    checkPalindrom(i, i + 1); //even palindrome we start with adjacent substring and traverse right and left
  }

  function checkPalindrom(left, right) {
    while (left >= 0 && right < stringLength && str[left] === str[right]) {
      //if char at left == char at right
      left--; //decrease left
      right++; //increase right and continue the loop
    }
    //doing a reverse ++ and -- since it would have been incremented inside loop and condition failed
    left++;
    right--;

    //if new palindrome substring length is less than new length assign the new value to substring
    if (returnString.length < right - left + 1) {
      returnString = str.slice(left, right + 1);
    }
  }
  return returnString;
};

export default longestPalindromicSubString;
