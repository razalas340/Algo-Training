# 14. Longest Common Prefix
# Solved
# Easy
# Topics
# Companies
# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".

class Solution:
  def longestCommonPrefix(self, v: List[str]) -> str:

     # ["flower","flow","flight"]
    # [ 'flightttt', 'flow', 'flower' ] sorted
    # i = 0
    # f == f

    ans=""
    v=sorted(v)
    first=v[0]
    last=v[-1]
    for i in range(min(len(first),len(last))):
        if(first[i]!=last[i]):
            return ans
        ans+=first[i]
    return ans 