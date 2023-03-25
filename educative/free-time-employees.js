/**
 * You’re given an array containing the schedules of multiple people. 
 * Each person’s schedule is an array of non-overlapping intervals in sorted order. 
 * An interval is specified with the start time and the end time, both being positive integers. 
 * Your task is to find the list of intervals representing the free time for all the people. 
 * We’re not interested in the interval from negative infinity to zero or from the end of the last scheduled interval in the input to positive infinity.
 */

function employeeFreeTime(schedule){
  let result = [];    
  let intervals = [], index = 0;
  schedule.forEach(s => {
    s.forEach(i => { intervals[index++] = i})
    
  })
  intervals.sort((a,b) => {
    return a[0]-b[0]
  })
  let prevLast = intervals[0][1]
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > prevLast) {
      result.push([prevLast, intervals[i][0]]);
    }
    prevLast = prevLast > intervals[i][1] ? prevLast : intervals[i][1];
  }
  return result;

}


console.log(employeeFreeTime([ [[1,2],[5,6]] , [[1,3]] , [[4,10]]]))