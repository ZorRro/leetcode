function mergeSorted(nums1, m, nums2, n){
  for (let i = n-1; i >= 0; i--) {
      let newSize = m + (n-i-1)
      const cur = nums2[i]
      let j = newSize;
      for (; nums1[j-1] > cur && j > 0; j--) {
          nums1[j] = nums1[j-1];
      }
      // if (j < 0) {
      //     nums1[0] = cur
      // }
      nums1[j] = cur;
  }
  return nums1;
}

let result = mergeSorted([2,6,8,10], 4, [1,7,16], 3)
result.forEach(x => console.log(x))

