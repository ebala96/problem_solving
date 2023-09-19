// Repeated String Match
// Given two strings a and b, return the minimum number of
// times you should repeat string a so that string b is a
// substring of it. If it is impossible for b to be a substring of
// a after repeating it, return -1

var repeatedStringMatch = (s1, s2) => {
  //   let count = Math.ceil(s2.length / s1.length);
  //   if (s1.repeat(count).includes(s2)) {
  //     return count;
  //   }
  //   if (s1.repeat(count + 1).includes(s2)) {
  //     return count + 1;
  //   }

  //   return -1;
  let str = "";
  let count = 0;

  while (str.length <= s1.length + s2.length) {
    str += s1;
    count++;

    if (str.includes(s2)) {
      return count;
    }
  }

  return -1;
};

export default repeatedStringMatch;
