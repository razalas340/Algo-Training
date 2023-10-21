// 853. Car Fleet
// Medium
// 3.1K
// 748
// Companies
// There are n cars going to the same destination along a one-lane road. The destination is target miles away.

// You are given two integer array position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).

// A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. The faster car will slow down to match the slower car's speed. The distance between these two cars is ignored (i.e., they are assumed to have the same position).

// A car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.

// If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.

// Return the number of car fleets that will arrive at the destination.

var carFleet = function (target, position, speed) {
  let lastTime = -1;
  let result = 0;
  let posSpeed = new Map();

  // position = N
  // for loop on N = O:N

  // N
  // N + N Log(N) + N

  // 2N + N log(N)

  // N
  for (let i = 0; i < position.length; i++) {
    posSpeed.set(position[i], speed[i]);
  }

  //   { posSpeed: Map(5) { 10 => 2, 8 => 4, 0 => 1, 5 => 1, 3 => 3 } }

  // n + nlog(n)
  let sortedPos = [...posSpeed.keys()].sort((a, b) => b - a);

  // sortedPos [ 10, 8, 5, 3, 0 ]

  // time: 1 sortedPos[i]: 10
  // time: 1 sortedPos[i]: 8
  // time: 7 sortedPos[i]: 5
  // time: 3 sortedPos[i]: 3
  // time: 12 sortedPos[i]: 0

  // N

  //   { posSpeed: Map(5) { 10 => 2, 8 => 4, 0 => 1, 5 => 1, 3 => 3 } }

  // console.log('get (10):',posSpeed.get(10))
  for (let i = 0; i < sortedPos.length; i++) {
    let time = (target - sortedPos[i]) / posSpeed.get(sortedPos[i]);

    // sortedPos [ 10, 8, 5, 3, 0 ]

    // pos: 10, time 1
    // result = 1

    // lastTime = time 1

    // pos: 8, time 1

    // pos: 5, time 7
    // 7 > 1
    // lastTime = time 7
    // result = 2

    // pos: 0, time 12
    // lastTime = 12

    // pos: 3, time 4
    // 4 > 7
    // result = 2
    // lastTime = time 7

    // 12 > 7
    // result = 3
    //
    if (time > lastTime) {
      result++;
      lastTime = time;
    }
  }
  return result;
};

const target = 12;
const position = [10, 8, 0, 5, 3];
const speed = [2, 4, 1, 1, 3];

console.log(carFleet(target, position, speed));

// Example 1:

// Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
// Output: 3
// Explanation:
// The cars starting at 10 (speed 2) and 8 (speed 4) become a fleet, meeting each other at 12.
// The car starting at 0 does not catch up to any other car, so it is a fleet by itself.
// The cars starting at 5 (speed 1) and 3 (speed 3) become a fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.
// Note that no other cars meet these fleets before the destination, so the answer is 3.
// Example 2:

// Input: target = 10, position = [3], speed = [3]
// Output: 1
// Explanation: There is only one car, hence there is only one fleet.
// Example 3:

// Input: target = 100, position = [0,2,4], speed = [4,2,1]
// Output: 1
// Explanation:
// The cars starting at 0 (speed 4) and 2 (speed 2) become a fleet, meeting each other at 4. The fleet moves at speed 2.
// Then, the fleet (speed 2) and the car starting at 4 (speed 1) become one fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.
