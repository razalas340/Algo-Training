class Solution:
  def majorityElement(self, nums: List[int]) -> int:
      map = {}
      max = len(nums) / 2
      for num in nums:
          if num in map:
              map[num] += 1
          else:
              map[num] = 1
          if map[num] > max:
            return num