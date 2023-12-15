// 14. Longest Common Prefix
// Solved
// Easy
// Topics
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
  let result = '';

  for (let i = 0; i < strs[0].length; i++) {
    let prefix = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      let current = strs[j][i];
      if (prefix !== current) {
        return result;
      }
    }
    result += prefix;
  }

  return result;
};

const strs = ['flower', 'flow', 'flight'];

console.log(longestCommonPrefix(strs));

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
