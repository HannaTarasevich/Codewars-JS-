// Write a function that takes in a string of one or more words, and returns the same string,
//but with all five or more letter words reversed (like the name of this kata).

// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.
// Examples:

// spinWords("Hey fellow warriors") => "Hey wollef sroirraw"
// spinWords("This is a test") => "This is a test"
// spinWords("This is another test") => "This is rehtona test"

function spinWords(string) {
  if (string.match(/([A-Za-z\s])/g)) {
    let newString = '';
    let newArray = string.split(' ');
    //console.log(newArray);
    for (let el in newArray) {
      //console.log(newArray[el].split('').reverse().join(''));
      newString +=
        newArray[el].length >= 5
          ? `${newArray[el].split('').reverse().join('')} `
          : `${newArray[el]} `;
    }

    return newString.trim();
  }
  return '';
}

function spinWords2(words) {
  return words
    .split(' ')
    .map(function (word) {
      return word.length > 4 ? word.split('').reverse().join('') : word;
    })
    .join(' ');
}
