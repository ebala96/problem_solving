//Roman to Integer
// Roman numerals are represented by seven different
// symbols: I, V, X, L, C, D and M.
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

var romanToInteger = (romanString) => {
  let romanValueMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    },
    total = 0,
    prevValue = 0;
  romanString
    .trim()
    .split("")
    .reverse()
    .forEach((roman) => {
      prevValue <= romanValueMap[roman]
        ? (total = total + romanValueMap[roman])
        : (total = total - romanValueMap[roman]);
      prevValue = romanValueMap[roman];
    });

  return total;
};

export default romanToInteger;
