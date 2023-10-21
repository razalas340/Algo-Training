// 739. Daily Temperatures
// Medium
// 11.7K
// 256
// Companies
// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
//o(n2)
var dailyTemperatures = function (temperatures) {
  let result = [];

  for (let i = 0; i < temperatures.length; i++) {
    let days = 0;
    let valid = false;
    for (let j = i + 1; j < temperatures.length; j++) {
      console.log(temperatures[i], temperatures[j]);
      days++;
      if (temperatures[i] < temperatures[j]) {
        valid = true;
        result.push(days);
        break;
      }
      // else if( temperatures[i]> temperatures[j]){
      //   continue
      // }
    }
    if (!valid) {
      result.push(0);
    }
  }
  return result;
};

// const temperatures = [73, 74, 75, 71, 69, 72, 76, 73]

// console.log(dailyTemperatures(temperatures))
// Output: [1,1,4,2,1,1,0,0]

// THIS IS USING STACK PROPERLY
//o(n)
var dailyTemperatures = function (temperatures) {
  let result = new Array(temperatures.length).fill(0);
  let stack = []; // This will store indices
  console.log(result);
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      // current temp > last temp in stack

      // stack = 0
      // 74 > temp[0] = 73
      // idx = 0
      // result[0] = 1 - 0 = 1

      // stack = 1
      // 75 > 74

      // 73 72 74
      let idx = stack.pop();
      result[idx] = i - idx;
    }
    stack.push(i);
  }
  return result;
};

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures)); // Output: [1,1,4,2,1,1,0,0]

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]
