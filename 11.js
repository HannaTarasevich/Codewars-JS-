/*Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""*/

function solution(string) {
  let newString = '';
  for (let el in string) {
    console.log(string.charAt(el) === string.charAt(el).toUpperCase());
    string.charAt(el) === string.charAt(el).toUpperCase()
      ? (newString += ' ' + string.charAt(el))
      : (newString += string.charAt(el));
  }
  return newString;
}

console.log(solution('camelCasingTest'));
