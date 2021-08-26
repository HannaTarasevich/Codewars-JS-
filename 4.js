// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function duplicateEncode(word) {
  let expectedArray = [];
  let casedWord = word.toLowerCase();
  let newArray = casedWord.split('');

  for (let el = 0; el < newArray.length; el++) {
    let x = newArray.lastIndexOf(newArray[el]);
    let y = newArray.indexOf(newArray[el]);
    if (x === y) {
      expectedArray.push('(');
    } else {
      expectedArray.push(')');
    }
  }
  return expectedArray.join('');
}
