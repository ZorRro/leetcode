/**
 * 
 * @param {[1,2,3...]} a [1,2,3,...]
 * @returns boolean
 * @description Checks if a circular array contains a cycle.
 */
function isCyclicCircularArray(a) {
  let m = {};
  for(let i = 0; i < a.length; i++) {
    m[i] = 1;
    let c = i;
    let direction = a[c] < 0 ? -1 : 1
    while(1) {
      let next = c + a[c];
      c = Math.abs(next) >= a.length ? next - a.length : next;
      if ((a[c] < 0 && direction < 0) || (a[c] > 0 && direction > 0) ) {
        if (m[c]) return true; // cycle
        m[c] = 1;
      } else break; // change in direction
    }
  }
  return false;
}

console.log(isCyclicCircularArray([1,3,-2,-4,1]))
console.log(isCyclicCircularArray([1,1,1]))
console.log(isCyclicCircularArray([1,1,-1]))
console.log(isCyclicCircularArray([1,4,3]))
console.log(isCyclicCircularArray([3, 3, 1, -1, 2]))