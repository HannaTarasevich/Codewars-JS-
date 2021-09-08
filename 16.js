/*Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true*/

function validParentheses(parens) {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < parens.length; i++) {
    parens[i] == '(' ? arr1.push(parens[i]) : arr2.push(parens[i]);
    if (arr1.length < arr2.length) {
      return false;
    }
  }
  return arr1.length == arr2.length;
}
