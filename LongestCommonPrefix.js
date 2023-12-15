// 14. Longest Common Prefix
// Solved
// Easy
// Topics
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
    // let result = ''
  
    let ans = ''
    strs.sort()
  
    let first = strs[0]
    let last = strs[strs.length - 1]
  
    // for (let i = 0; i < Math.min(first.length, last.length); i++) {
    for (let i = 0; i < first.length; i++) {
  
      if (first[i] !== last[i]){
        return ans
      }
      ans += first[i]
    }
    return ans
    

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
