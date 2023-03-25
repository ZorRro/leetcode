const mergeIntervals = (A,B) => {
  if (A[1] >= B[0]) {
      return [ [A[0], Math.max(A[1], B[1])], null];
  } else {
      return [A,B]
  }
}

function insertInterval(existingIntervals, newInterval){
  
  // Write your code here
  let result = [], mergedInterval = null;
  for (let i = 0; i < existingIntervals.length; i++) {
      if (!mergedInterval) {
          if (existingIntervals[i][0] < newInterval[0] && 
              existingIntervals[i][1] < newInterval[0]) {
              result.push(existingIntervals[i])
          } else {
              let mergeResult = mergeIntervals(existingIntervals[i], newInterval);
              mergedInterval = mergeResult[0];
          }
      } else {
          let [A, B] = mergeIntervals(mergedInterval, existingIntervals[i]);
          if (B){
              result.push(mergedInterval);
              result.push(existingIntervals[i]);
              mergedInterval = null;
          } else {
              mergedInterval = A;
          }
      }
  }
  if (mergedInterval) result.push(mergedInterval);
  return result;
}

console.log(insertInterval([[1, 2], [3, 4], [5, 8], [9, 15]] , [2, 5]))
console.log(insertInterval([[1, 6], [8, 9], [10, 15], [16, 18]] , [9, 10]))
console.log(insertInterval([[1, 2], [3, 4], [5, 8], [9, 15]] , [16, 17]))
console.log(insertInterval([[1, 4], [5, 6], [7, 8], [9, 10]] , [1, 5]))
console.log(insertInterval([[1, 3], [4, 6], [7, 8], [9, 10]] , [1, 10]))
console.log(insertInterval([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]] , [3, 5]))