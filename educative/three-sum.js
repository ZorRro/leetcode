function findSumOfThree(nums, target) {
  // Your code will replace the placeholder return statement.
  for (let i = 0; i < nums.length-2; i++) {
      let l = i+1, h = nums.length-1;
      while(l < h) {
          let s = nums[i] + nums[l] + nums[h]
          if (s < target) l++
          else if(s > target) h--
          else return true
      }
  }
  return false
}

console.log(findSumOfThree([3,2,1], 6))
console.log(findSumOfThree([1,-1,0], 2 ))
console.log(findSumOfThree([3,7,1,2,8,4,5], 22))