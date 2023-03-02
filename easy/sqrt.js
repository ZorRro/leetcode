var mySqrt = function(x) {
  if (x < 2) return x;
  let low = 0, high = x, mid;
  while(low < high) {
      mid = (low + (high-low)+1)/2
      let dbl = mid * mid
      if (dbl == x) return mid;
      if (dbl > x) {
          high = mid-1;
      } else {
          low = mid
      }
  } 
  return Math.floor(low);
};

console.log(mySqrt(6))