/**
 * For two arrays of closed intervals given as input, intervalListA and intervalListB, where each interval has its own start and end time, write a function that returns the intersection of the two interval arrays.
 * 
  For example, the intersection of 
  [ 3 , 8 ] [3,8] and [ 5 , 10 ] [5,10] is [ 5 , 8 ] [5,8] .
 */
function intervalsIntersection(intervalListA, intervalListB) {
    const L1 = intervalListA, L2 = intervalListB;
    let result = [];
    for(let i = 0, j = 0; i < L1.length && j < L2.length;) {
      let l1 = L1[i], l2 = L2[j];
      if(l1[0] < l2[1] && l2[0] < l1[1]) {
        result.push([Math.max(l1[0], l2[0]), Math.min(l1[1], l2[1])]); 
      }
      if (l1[1] < l2[1]) {
        i++
      } else {
        j++
      }
    }
  return result;
}


console.log(intervalsIntersection([[1,4],[5,6],[7,8],[9,15]] , [[2,4],[5,7],[9,15]]))