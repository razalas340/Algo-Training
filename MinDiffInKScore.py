class Solution:
    def minimumDifference(self, nums: List[int], k: int) -> int: 

    nums.sort()

    minDiff = float('inf')

    for i in range(len(nums) - k + 1):
        minDiff = min(minDiff, abs(nums[i] - nums[i + k - 1]))

    return minDiff


#console.log(minimumDifference(nums1, 6)); 

#Example 1:

#Input: nums = [90], k = 1
#Output: 0
#Explanation: There is one way to pick score(s) of one student:
#- [90]. The difference between the highest and lowest score is 90 - 90 = 0.
#The minimum possible difference is 0.
#Example 2:

#Input: nums = [9,4,1,7], k = 2
#Output: 2
#Explanation: There are six ways to pick score(s) of two students:
#- [9,4,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.
#- [9,4,1,7]. The difference between the highest and lowest score is 9 - 1 = 8.
#- [9,4,1,7]. The difference between the highest and lowest score is 9 - 7 = 2.
#- [9,4,1,7]. The difference between the highest and lowest score is 4 - 1 = 3.
#- [9,4,1,7]. The difference between the highest and lowest score is 7 - 4 = 3.
#- [9,4,1,7]. The difference between the highest and lowest score is 7 - 1 = 6.
#The minimum possible difference is 2.