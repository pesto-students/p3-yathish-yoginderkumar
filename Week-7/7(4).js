function validParentheses(string) {
  let mapForBrackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let stackForBrackets = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(" || string[i] === "{" || string[i] === "[") {
      stackForBrackets.push(string[i]);
    } else if (
      stackForBrackets[stackForBrackets.length - 1] ===
      mapForBrackets[string[i]]
    ) {
      stackForBrackets.pop();
    } else return false;
  }
  return stackForBrackets.length ? false : true;
}

console.log(validParentheses("[()]{}{()()}"));
