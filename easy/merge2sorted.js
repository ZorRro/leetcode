const swap = (arr, i, j) => {
    let t = arr[i];
    arr[i] = arr[j]
    arr[j] = t;
  console.log(`swapped ${arr[i]} --> ${arr[j]}`)
}

var merge = function(nums1, m, nums2, n) {
    const A = nums1, B = nums2;
    
    console.log(A)
    console.log(B)

    let c = 0;
    for(let i = 0; i<n; i++) {
        let j = c;
        for(; j < m+i; j++) {
            if (A[j] > B[i]) {
                for (let k = m+i; k > j; k--) {
                    swap(A, k, k-1);
                }
                break;
            }
        }
        A[j] = B[i];
        c = j + 1;
    }
    console.log(A)
};


// let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
let nums1 = [4,5,6,0,0,0], m = 3, nums2 = [1,2,3], n = 3;
merge(nums1, m, nums2, n);