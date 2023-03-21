function minSubArraylen(target, nums) {
  let i = 0 , j = 0, sum = 0, l = nums.length, found = false;
  while(j < nums.length) {
      sum += nums[j]; 
      if (sum == target) {
          found = true
          let cl = j-i+1;
          l = cl < l ? cl : l;
          i = j + 1
          sum = 0;
      } else if (sum > target) {
          found = true;
          let diff = sum - target;
          while (diff >= nums[i]) {
              sum -= nums[i]
              diff -= nums[i++]
          }
          let cl = j - i + 1;
          l = cl < l ? cl : l
      }
      j++;
  }
  return found === true ? l : 0
}

console.log(minSubArraylen(7 , [2, 3, 1, 2, 4, 3]))