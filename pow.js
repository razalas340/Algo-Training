/** Write a function that calculates x^y, where x is given as the base and y is given as the power.
 *
 * Example:
 * pow(2,4) => 2^4 = 16
 * Rational: 2 * 2 * 2 * 2 = 16
 *
 * Extension: Use recursion
 */

function pow(base, power) {
  // for a recursive approach remember to write your base case
  // write your recursive logic here
  return base ** power;
}
console.log(pow(2, 4));
/**
 * Extension: Use recursion to solve the problem in O(n) time complexity -> Linear time complexity
 */
/*pass x and y to the function

do x * x and subtract one from y

and then pass the new x and y to the same function*/
function powRecurse(base, power) {
  // for a recursive approach remember to write your base case
  // write your recursive logic here
  if (power === 0) return 1;
  base = base * base;
  power = power - 1;
  return powRecurse(base, power);
}
console.log(powRecurse(2, 4));
module.exports = { pow, powRecurse };
