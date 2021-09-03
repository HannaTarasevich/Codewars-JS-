/*Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. 
You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost 
digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). 
The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.*/

function solution(roman) {
  const I = 1;
  const V = 5;
  const X = 10;
  const L = 50;
  const C = 100;
  const D = 500;
  const M = 1000;
  let year = 0;
  for (let el = 0; el < roman.length; el++) {
    if (roman[el] != 'I') {
      switch (roman[el]) {
        case 'V':
          year += V;
          break;
        case 'X':
          year += X;
          break;
        case 'L':
          year += L;
          break;
        case 'C':
          year += C;
          break;
        case 'D':
          year += D;
          break;
        case 'M':
          year += M;
          break;
      }
    } else if (roman[el] == 'I') {
      if (!roman[el + 1] || (roman[el + 1] && roman[el + 1] == 'I')) {
        year += I;
      } else {
        year -= I;
      }
    }
  }
  return year;
}

console.log(solution('XXI'));
