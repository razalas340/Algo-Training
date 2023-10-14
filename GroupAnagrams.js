// 49. Group Anagrams
// Medium
// 17.4K
// 514
// Companies
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

var groupAnagrams = function (strs) {
  let map = {};
  let result = [];

  for (let i = 0; i < strs.length; i++) {
    let str = strs[i];
    let sorted = str.split('').sort().join('');
    console.log('sorted', sorted);
    if (map[sorted]) {
      map[sorted].push(str);
    } else {
      map[sorted] = [str];
    }
  }

  return Object.values(map);
};

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(strs));
// [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
