// 187. Repeated DNA Sequences
// Medium
// Topics
// Companies
// The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

// For example, "ACGAATTCCG" is a DNA sequence.
// When studying DNA, it is useful to identify repeated sequences within the DNA.

// Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

// Example 1:

// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]
// Example 2:

// Input: s = "AAAAAAAAAAAAA"
// Output: ["AAAAAAAAAA"]

var findRepeatedDnaSequences = function (s) {
  let map = {};

  let current = s.slice(0, 10);

  map[current] = 1;

  // AAAAAAAAAAAAA
  //          sxxx

  let left = 0;
  let right = 10;

  let result = [];

  while (right < s.length) {
    current = current.substring(1);

    current = current + s[right];
    if (map[current]) {
      if (map[current] !== 2) {
        map[current] = 2;
        result.push(current);
      }
    } else {
      map[current] = 1;
    }
    right++;
  }

  return result;
};

const s = 'AAAAAAAAAAAAA';
// Output: ["AAAAACCCCC","CCCCCAAAAA"]
console.log(findRepeatedDnaSequences(s));
