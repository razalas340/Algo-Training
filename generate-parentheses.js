/*

Given n pairs of parentheses, write a function to generate all combinations of
well-formed parentheses.

For example, given n = 2, a solution set is:

[
  "(())",
  "()()"
]

Given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

Given n = 0, a solution set is:

[
  ""
]

*/

const generateParentheses = (n) => {
  const result = [];

  const helper = (current, openCount, closeCount) => {
    if (closeCount === 0) {
      result.push(current);
      return;
    }
    if (closeCount > 0) {
      helper(current + ')', openCount, closeCOunt - 1);
    }
  };
  helper('', n, n);
  return result;
};

console.log(generateParentheses(2)); // expected ['({})', '()()' ]

module.exports = { generateParentheses };
