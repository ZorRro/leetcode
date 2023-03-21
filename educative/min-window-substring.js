function minWindow (s, t) {
  // Your code will replace this placeholder return statement.
  const hm = {}
  t.split('').forEach(c => {
    if (hm[c]) {
      hm[c] += 1
    } else hm[c] = 1
  })

  let count = Object.keys(hm).length
  let i = 0,
    j = 0,
    start = -1,
    end = s.length,
    found = false,
    minLength = end - start + 1
  while (j < s.length) {
    // getting end
    
    let currentChar = s[j++]
    if (hm.hasOwnProperty(currentChar)) {
      hm[currentChar] -= 1
    }
    if (hm[currentChar] == 0) count--
    if (count > 0) continue;
    
    // reducing start for min length
    while (count == 0) {
      let currentChar = s[i++]
      if (hm.hasOwnProperty(currentChar)) {
        hm[currentChar] += 1
      }
      if (hm[currentChar] > 0) count++;
    }

    if (j - i < minLength) {
      minLength = j - i
      start = i; end = j;
      found = true;
    } 
  }
  return found == true ? s.substring(start-1, end) : ''
}

console.log(minWindow('abbcdabcdad', 'abc'))
