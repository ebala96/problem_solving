// Valid Anagram
// Given two strings s and t, return true if t is an anagram ofs, and false otherwise.
// An Anagram is a word or phrase formed by rearrangingthe letters of a different word or phrase, typically using
// all the original letters exactly once.

var validAnagram = (s1, s2) => {
  var charactersMap = {};
  for (var i = 0; i < s1.length; i++) {
    charactersMap[s1[i]] ? charactersMap[s1[i]]++ : (charactersMap[s1[i]] = 1);
  }
  for (var i = 0; i < s2.length; i++) {
    if (charactersMap[s2[i]]) {
      charactersMap[s2[i]]--;
    } else {
      return false;
    }
  }
  return Object.keys(charactersMap).every((k) => charactersMap[k] === 0);
};

export default validAnagram;
