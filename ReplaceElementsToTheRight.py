 #console.log(replaceElements(arr))

 class Solution:
     def replaceElements(self, arr: List[int]) -> List[int]:

# let curHighest = arr[arr.length - 1]
       curHighest = arr[-1]

       for i in range(len(arr) - 2, -1, -1):
 # for (let i = arr.length - 2; i >= 0; i--){

        curNum = arr[i]
 #  arr[i] = curHighest

        curHighest = max(curHighest,curNum)
  # curHighest = Math.max(curHighest, curNum)
        arr[-1] = -1
 #  arr[arr.length - 1] = -1
        return arr