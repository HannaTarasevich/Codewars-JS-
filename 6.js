// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  if (str) {
    if (str.match(/([_-].{1})/g)) {
      var dividedString = str.replace(/([_-][a-zA-Z].{0})/g, (x) =>
        x[1].toUpperCase()
      );
    }
  } else {
    dividedString = [];
  }
  return dividedString;
}

console.log(toCamelCase('the-Stealth-Warrior'));
