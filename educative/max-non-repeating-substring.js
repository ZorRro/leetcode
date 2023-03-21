function findLongestSubstring(inputString) {
  if (inputString.length == 1) return 1;
  let s = inputString;
  let i = 0, j = 0, l = 0, map = { [s[j]]: j}
  while(j < s.length) {
      j++;
      if (map.hasOwnProperty(s[j]) && map[s[j]] >= i) {
          let cl = j - i;
          if (l < cl) l = cl;
          i = map[s[j]] + 1
        //   let entries = Object.entries(map);
        //   entries.forEach(([key,val]) => {
        //       if (val < i) delete map[key]
        //   });
      }
      map[s[j]] = j;
  }
  let cl = j - i;
  if (l < cl) l = cl;
  return l;
}

console.log(findLongestSubstring("abcdbea"))
console.log(findLongestSubstring("aba"))
console.log(findLongestSubstring("abccabcabcc"))