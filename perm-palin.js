/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 * @see: Permutations: https://stattrek.com/statistics/dictionary.aspx?definition=permutation
 * @see: Palindromes: https://examples.yourdictionary.com/palindrome-examples.html
 *
 * In terms of time complexity, see if you can solve this in O(n) / linear time.
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 * Hint: Think about the length of the string and how that relates to the frequencies of the characters
 */

const permPalin = (str) => {
  if (str.length === 1) return true;

  let map = {};

  for (let s of str) {
    map[s] = (map[s] || 0) + 1;
  }

  console.log(map);

  let firstOdd = false;

  //  { c: 2, b: 1, a: 1 }

  for (let [key, val] of Object.entries(map)) {
    // b 1

    if (firstOdd) {
      return false;
    }

    if (val % 2 === 1) {
      firstOdd = true;
    }

    // firstOdd = true
  }
  return true;
};
// console.log(permPalin('abab')) // true
// console.log(permPalin('cbaba')) // false
console.log(permPalin('cbac')); // false
// console.log(permPalin('a')) // true

/*
 * Extension: Solve in constant space complexity.
 */
const permPalinAdvanced = (str) => {
  let bitVector = 0; // initialize our bit vector

  for (let char of str) {
    // calculate the bit position for this character
    let position = char.charCodeAt(0) - 'a'.charCodeAt(0);

    // toggle the bit at that position
    bitVector ^= 1 << position;
  }

  // check that at most one bit is set to 1 in the bitVector
  // bitVector & (bitVector - 1) will unset the rightmost set bit in bitVector.
  // If the result is 0, then bitVector had at most one bit set.
  return (bitVector & (bitVector - 1)) === 0;
};
/*

Bitwise Approach:
Think of each character as being associated with a particular bit in an integer.
As you iterate over the string:
For each character, toggle its corresponding bit.
In the end:
For even-length strings: All bits should be 0.
For odd-length strings: Only one bit should be 1.
The advantage of this approach is that the integer (bit vector) does not grow with the size of the string. However, it has a limitation in terms of the number of unique characters it can represent (e.g., 32 unique characters for a 32-bit integer). This approach works well for a string that's limited to a particular set of characters, like the lowercase English alphabet (26 characters).

 * Extension: Solve in constant space complexity.
 Associate each letter of the alphabet with a particular bit position in an integer. For example, associate 'a' with the first bit, 'b' with the second bit, and so on.
As we iterate through the string, for each character, we'll toggle its associated bit.
In the end, the integer should either have all bits set to 0 (for even-length strings) or have just a single bit set to 1 (for odd-length strings).
 */

const permPalinAdvanced = (str) => {
  let bitVector = 0; // initialize our bit vector

  for (let char of str) {
    // calculate the bit position for this character
    let position = char.charCodeAt(0) - 'a'.charCodeAt(0);

    // toggle the bit at that position
    bitVector ^= 1 << position;
  }

  // check that at most one bit is set to 1 in the bitVector
  // bitVector & (bitVector - 1) will unset the rightmost set bit in bitVector.
  // If the result is 0, then bitVector had at most one bit set.
  return (bitVector & (bitVector - 1)) === 0;
};

/** 
Alright! Let's implement the permPalinAdvanced function using the bitwise approach.

Here's a plan:

Associate each letter of the alphabet with a particular bit position in an integer. For example, associate 'a' with the first bit, 'b' with the second bit, and so on.
As we iterate through the string, for each character, we'll toggle its associated bit.
In the end, the integer should either have all bits set to 0 (for even-length strings) or have just a single bit set to 1 (for odd-length strings).
Let's get started:

javascript
Copy code
const permPalinAdvanced = (str) => {
    let bitVector = 0; // initialize our bit vector

    for (let char of str) {
        // calculate the bit position for this character
        let position = char.charCodeAt(0) - 'a'.charCodeAt(0);

        // toggle the bit at that position
        bitVector ^= (1 << position);
    }

    // check that at most one bit is set to 1 in the bitVector
    // bitVector & (bitVector - 1) will unset the rightmost set bit in bitVector.
    // If the result is 0, then bitVector had at most one bit set.
    return (bitVector & (bitVector - 1)) === 0;
};
Let me explain some of the critical lines:

let position = char.charCodeAt(0) - 'a'.charCodeAt(0);:
This calculates the bit position associated with the character. If the character is 'a', the position is 0. If it's 'b', the position is 1, and so on.

bitVector ^= (1 << position);:
This toggles the bit at the calculated position. The expression (1 << position) creates an integer with only the bit at the position set to 1, and the ^= operator is a bitwise XOR that toggles that bit in bitVector.

return (bitVector & (bitVector - 1)) === 0;:
This checks if at most one bit is set in bitVector. The expression (bitVector - 1) decrements bitVector, changing the rightmost set bit to 0 and all bits to its right to 1. When you bitwise AND bitVector with this result, it unsets the rightmost set bit. If the resulting value is 0, then bitVector had at most one bit set, which means the input string can form a palindrome. */

module.exports = { permPalin };
