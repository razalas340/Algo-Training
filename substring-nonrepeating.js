/*

Given a string, find the length of the longest substring without repeating characters.
Just return the length of the substring, not the substring itself.

Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The longest substring is "abc", with the length of 3.

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The longest substring is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The longest substring is "wke", with the length of 3.
Note that the longest substring must actually be a substring, as "pwke" is a
subsequence and not a substring.

Example 4:
Input: ""
Output: 0
Explanation: an empty string has length 0

Hint: think about the largest valid "window" of a substring without repeating
characters. How do we keep track of this "window"?

*/

const substringNonrepeating = (s) => {
  let map = new Map();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    let cur = s[right];

    if (map.has(cur)) {
      left = map.get(cur) + 1;
    }

    map.set(cur, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};

const str1 = 'abcabcbb';
const x1 = 'pwwkew';

console.log(substringNonrepeating(str1));
console.log(substringNonrepeating(x1));

const str2 = 'abcabcbb';

console.log(substringNonrepeating(str2));

module.exports = { substringNonrepeating };
