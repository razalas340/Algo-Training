class Solution:
  def lengthOfLastWord(self, s: str) -> int:
    total = 0

    for i in range(len(s) -1 , -1, -1):
       if total > 0 and s[i] == ' ':
        return total

       if s[i] != ' '
        total += 1

    return total 