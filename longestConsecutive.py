from typing import List

class Solution:
  def longestConsecutive(self, nums: List[int]) -> None:

     num_set = set(nums)

     max_num = 0

     for num in num_set:
       if num - 1 not in num_set:
         cur_num = num
         count = 1
         while cur_num + 1 in num_set:
           cur_num += 1
           count += 1
         max_num = max(max_num, count)
     return max_num