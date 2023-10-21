// 150. Evaluate Reverse Polish Notation
// Medium
// 6.6K
// 964
// Companies
// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.

var evalRPN = function (tokens) {
  let stack = [];

  let op = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };

  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    console.log(stack);

    if (isNaN(token)) {
      let first = stack.pop();
      let second = stack.pop();

      stack.push(Math.trunc(op[token](+second, +first)));
    } else {
      stack.push(+token);
    }
  }
  return stack[0];
};
const tokens = ['2', '1', '+', '3', '*'];
const tokens1 = ['4', '13', '5', '/', '+']; // 6
console.log(evalRPN(tokens1));

// Example 1:

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
// Example 2:

// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

// var dailyTemperatures = function(temperatures) {
//   let array = new Array(temperatures.length).fill(0);

//   let stack = [];

//   for (let i = 0; i < temperatures.length; i++) {
//     let temp = temperatures[i];

//     if (stack.length === 0) {
//       stack.push([temp, i]);
//       continue;
//     }

//     let lastTemp = stack[stack.length - 1][0]
//     let lastIndex = stack[stack.length - 1][1]

//     //  1, 1, 4, 2, 1, 1, 0, 0

//     // stack = [ [ 75, 2 ], [ 71, 3 ],  ]

//     // temp = 75, i = 5
//     //

//      //          0   1  2    3   4   5   6   7
//     //  temp = [73, 74, 75, 71, 69, 72, 76, 73]

//     // index    0 1 2 3 4 5 6 7
//     // Output: [1,1,4,2,1,1,0,0]

//     // { i: 1, temp: 74, stack: [ [ 73, 0 ] ] }
//     // { i: 2, temp: 75, stack: [ [ 74, 1 ] ] }
//     // { i: 3, temp: 71, stack: [ [ 75, 2 ] ] }
//     // { i: 4, temp: 69, stack: [ [ 75, 2 ], [ 71, 3 ] ] }
//     // { i: 5, temp: 72, stack: [ [ 75, 2 ], [ 71, 3 ], [ 69, 4 ] ] }
//     // { i: 6, temp: 76, stack: [ [ 75, 2 ], [ 72, 5 ] ] }
//     // { i: 7, temp: 73, stack: [ [ 76, 6 ] ] }

//     while (stack.length > 0 && temp > lastTemp ) {

//       array[lastIndex] = Math.abs(
//         i - lastIndex
//       );
//       stack.pop();

//       if (stack.length > 0) {
//         lastTemp = stack[stack.length - 1][0];
//         lastIndex = stack[stack.length - 1][1]
//       }
//     }

//     stack.push([temp, i]);
//     // [ 74, 1 ]
//   }

//   return array;
// };
