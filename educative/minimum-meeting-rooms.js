/**
 * Given a list of meeting time intervals as input, find the minimum number of meeting rooms needed to hold these meetings.
 * [[2, 8], [3, 4], [3, 9], [5, 11], [8, 20], [11, 15]] ==> 3
 * [[1, 3], [2, 6], [8, 10], [9, 15], [12, 14]] ==> 2
 * [[1, 7], [2, 6], [3, 7], [4, 8], [5, 8]] ==> 5
 */
function findSets(intervals){
  intervals.sort((a,b) => { return a.start-b.start})
  let result = 0
  const hm = {};
  intervals.forEach((e,i) => {
      if (!hm[i]) {
          let meetingEnd = e.end;
          for (let j = i+1; j < intervals.length; j++) {
              if (hm[j]) continue;
              else if ( intervals[j].start >= meetingEnd) {
                  hm[j] = true;
                  meetingEnd = Math.max(meetingEnd, intervals[j].end)
              }
          }
          result++ ;
      }
  })
  return result;
}