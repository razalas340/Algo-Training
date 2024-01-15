// 1930. Unique Length-3 Palindromic Subsequences
// Solved
// Medium
// Topics
// Companies
// Hint
// Given a string s, return the number of unique palindromes of length three that are a subsequence of s.

// Note that even if there are multiple ways to obtain the same subsequence, it is still only counted once.

// A palindrome is a string that reads the same forwards and backwards.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".

// Hint 1
// What is the maximum number of length-3 palindromic strings?
// Hint 2
// How can we keep track of the characters that appeared to the left of a given position?
// Example 1:

// Input: s = "aabca"
// Output: 3
// Explanation: The 3 palindromic subsequences of length 3 are:
// - "aba" (subsequence of "aabca")
// - "aaa" (subsequence of "aabca")
// - "aca" (subsequence of "aabca")

var countPalindromicSubsequence = function (s) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], []);
    }
    map.get(s[i]).push(i);
  }

  let set = new Set(s);
  // Set(3) { 'a', 'b', 'c' }
  // console.log(set)

  let count = 0;

  for (let char of set) {
    let currentArr = map.get(char);
    // console.log(currentArr)
    // [ 0, 1, 4 ]
    // [ 2 ]
    // [ 3 ]

    // char = a
    // s = aabca

    //  s.slice(0 + 1, 4) = abc = size 3

    count += new Set(
      s.slice(currentArr[0] + 1, currentArr[currentArr.length - 1])
    ).size;
    // count += s.slice(currentArr[0] + 1, currentArr[currentArr.length - 1]).length
  }

  return count;
};

// // - "aba" (subsequence of "aabca")
// // - "aaa" (subsequence of "aabca")
// // - "aca" (subsequence of "aabca")

// const s = "aabca"

console.log(countPalindromicSubsequence(s));
