// 2639. Find the Width of Columns of a Grid
// Easy
// 137
// 26
// Companies
// You are given a 0-indexed m x n integer matrix grid. The width of a column is the maximum length of its integers.

// For example, if grid = [[-10], [3], [12]], the width of the only column is 3 since -10 is of length 3.
// Return an integer array ans of size n where ans[i] is the width of the ith column.

// The length of an integer x with len digits is equal to len if x is non-negative, and len + 1 otherwise.

// input: grid - array of arrays containing integers
// output: array of the length of each column 

var findColumnWidth = function(grid) {
    let result = [];
  
    for (let i = 0; i < grid[0].length; i++) {
      let max = 0;
  
      for (let j = 0; j < grid.length; j++) {
        max = Math.max(String(grid[j][i]).length, max);
      }
  
      result.push(max);
    }
    return result;
  };
  
  const grid = [[1],[22],[333]]
  // console.log(findColumnWidth(grid))
  
  // const grid = [
  //   [-15, 1, 3],
  //   [15, 7, 12],
  //   [5, 6, -2],
  // ];
  // Output: [3,1,2]
   
   
  // Example 1:
  
  // Input: grid = [[1],[22],[333]]
  // Output: [3]
  // Explanation: In the 0th column, 333 is of length 3.
  // Example 2:
  
  // Input: grid = [[-15,1,3],[15,7,12],[5,6,-2]]
  // Output: [3,1,2]
  // Explanation: 
  // In the 0th column, only -15 is of length 3.
  // In the 1st column, all integers are of length 1. 
  // In the 2nd column, both 12 and -2 are of length 2.
  
  
  
  // Imagine you have a table, like the kind you see in Excel. Each little box in that table is called a cell. The vertical stacks are called columns.
  
  // Now, in each of these cells, you can have a number. Some numbers are short, like "5" or "10". Some are long, like "12345". If a number is negative (meaning it has a minus in front of it, like "-123"), it's even longer by one more character because of the minus sign.
  
  // The "width" of a column is determined by the longest number in that column. Just like in a game of "Who's the tallest?", you'd look at the heights of all people and say the height of the tallest person, here you'd look at all the numbers in the column and say the length of the longest number.
  
  // Your job is to look at each column and determine its width. Then, you need to create a list that has all these widths.
  
  // For instance, let's take the example provided: grid = [[-10], [3], [12]]
  
  // Imagine it like this:
  
  // -10
  // 3
  // 12
  
  // Here, there's just one column. The longest number in this column is "-10" which has a length of 3 (1 for '-', 1 for '1', and 1 for '0'). So the width is 3. Your answer would be [3].
  
  
  
  // 2395. Find Subarrays With Equal Sum
  // Easy
  // 461
  // 24
  // Companies
  // Given a 0-indexed integer array nums, determine whether there exist two subarrays of length 2 with equal sum. Note that the two subarrays must begin at different indices.
  
  // Return true if these subarrays exist, and false otherwise.
  
  // A subarray is a contiguous non-empty sequence of elements within an array.
  
  
  // var findSubarrays = function(nums) {
  //     let sum1 = [];
  //     let sum2 = [];
  //   for (let i = 0; i < nums.length ; i++) {
  //     if(sum1.length < 2) {
  //       sum1.push(nums[i])
  //     }
  //     if(i>=1){
  //       sum2.push(nums[i]);
  //     }
  //   }
  //   res1 = sum1.reduce((ac,cv) => ac + cv, 0)
  //   res2 = sum2.reduce((ac,cv) => ac + cv, 0)
  //   if(res1 === res2){
  //     return true
  //   } 
  //   return false
  // };
  
  // const nums = [4,2,4]
  // const nums1 = [1,2,3,4,5]
  // const nums2 = [0,0]
  
  // console.log(findSubarrays(nums)) // Output: true
  // console.log(findSubarrays(nums1))
  
  
  
  // var findSubarrays = function (nums) {
  //   let set = new Set();
  //   for (let i = 0; i < nums.length; i++) {
  //     let sum = nums[i] + nums[i + 1];
  //     if (set.has(sum)) {
  //       return true;
  //     } else {
  //       set.add(sum);
  //     }
  //   }
  //   return false;
  // };
  
  // const Nums = [4, 2, 4];
  
  // const Nums1 = [
  //   77, 95, 90, 98, 8, 100, 88, 96, 6, 40, 86, 56, 98, 96, 40, 52, 30, 33, 97, 72,
  //   54, 15, 33, 77, 78, 8, 21, 47, 99, 48,
  // ];
  
  // // console.log(findSubarrays(nums)); // Output: true
  // console.log(findSubarrays(Nums1)); // Output: true
  
   
  
  // 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
  // Easy
  // 778
  // 37
  // Companies
  // Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.
  
  // Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.
  
  // A prefix of a string s is any leading contiguous substring of s.
  
  // input: sentence, searchWord
  // output: index of the minimum word where the prefix is
  var isPrefixOfWord = function(sentence, searchWord) {
    let minimum = 0;
    const words = sentence.split(' ');
    for (let i = 1; i < words.length; i++) {
      if (searchWord === words[i])
    }
  }
  
  console.log(isPrefixOfWord())
  
   
  
  // Example 1:
  
  // Input: sentence = "i love eating burger", searchWord = "burg"
  // Output: 4
  // Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.
  // Example 2:
  
  // Input: sentence = "this problem is an easy problem", searchWord = "pro"
  // Output: 2
  // Explanation: "pro" is prefix of "problem" which is the 2nd and the 6th word in the sentence, but we return 2 as it's the minimal index.
  
// 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
// Easy
// 778
// 37
// Companies
// Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.

// Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.

// A prefix of a string s is any leading contiguous substring of s.

// input: sentence, searchWord
// output: index of the minimum word where the prefix is
var isPrefixOfWord = function(sentence, searchWord) {
    // let minimum = 0;
    let match = '';
    const words = sentence.split(' ');
    console.log(words);
    for (let i = 0; i < words.length; i++) {
      for(let j = 0; j < searchWord.length; j++) {
        if (words[i][j] !== searchWord[j]) {
          break;
        }
        // burg = length 4
        // j = 3 = end
        match += words[i][j];
        console.log(match);
        if (j === searchWord.length - 1) return i;
        // if (match === searchWord) return i;
      } 
    }
    return -1;
  }
  
  const sentence = "i love eating burger";
  const searchWord = "burg";
  
  // const sentence2 = "hellohello hellohellohello"
  // const searchWord2 = "ell"
  
  // const sentence1 = "this problem is an easy problem"
  // const searchWord1 = "pro"
  
  console.log(isPrefixOfWord(sentence, searchWord));
  // console.log(isPrefixOfWord(sentence1, searchWord1));
  // console.log(isPrefixOfWord(sentence2, searchWord2));
  
  
  
   
  
  // Example 1:
  
  // Input: sentence = "i love eating burger", searchWord = "burg"
  // Output: 4
  // Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.
  // Example 2:
  
  // Input: sentence = "this problem is an easy problem", searchWord = "pro"
  // Output: 2
  // Explanation: "pro" is prefix of "problem" which is the 2nd and the 6th word in the sentence, but we return 2 as it's the minimal index.