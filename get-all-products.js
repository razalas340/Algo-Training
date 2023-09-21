/*

Given an array of at least two integers (which may be positive, negative, or zero),
return an array of all the possible products made by multiplying all but one number.
In other words, find all the products of multiplying any array.length - 1 numbers
in the array.

Example:

getAllProducts([1, 7, 3, 4]) -> [84, 12, 28, 21]
this is done via:
[7*3*4, 1*3*4, 1*7*4, 1*7*3]

getAllProducs([2, 5, 3]) -> [15, 6, 10]
this is done via:
[5*3, 2*3, 2*5]

Be careful in this problem! What if there is a zero (or multiple zeroes) in the
input array? How would you handle this?

*/

const getAllProducts = (array) => {
  let length = array.length;

  // Arrays to hold products on left and right side for every index
  let left = new Array(length).fill(1);
  let right = new Array(length).fill(1);
  let result = new Array(length).fill(1);

  // Calculate left products array
  let leftProduct = 1;
  for (let i = 1; i < length; i++) {
    leftProduct *= array[i - 1];
    left[i] = leftProduct;
  }

  // Calculate right products array
  let rightProduct = 1;
  for (let i = length - 2; i >= 0; i--) {
    rightProduct *= array[i + 1];
    right[i] = rightProduct;
  }

  // Calculate final results array
  for (let i = 0; i < length; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
};

console.log(getAllProducts([1, 7, 3, 4])); // Expected output: [84, 12, 28, 21]
console.log(getAllProducts([2, 5, 3])); // Expected output: [15, 6, 10]
console.log(getAllProducts([5, 6, 7, 4])); // Expected output: [168, 140, 120, 210]

module.exports = { getAllProducts };
