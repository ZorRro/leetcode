/**
 * @description Returns the list of substrings with length k which are repeated.
 * The string only contains the character mentioned below.
 * @param {String} s [ACGT]+
 * @param {Integer} k 4
 * @returns ["Repeating substring1", "Repeating Substring2"]
 */
function findRepeatedSequences(s, k) {
  // Your code will replace this placeholder return statement.
  const result = [], hash = {};
  if (k > s.length)
      return result;
  else {
      for(let i = 0; i < s.length-k; i++) {
          let currentSubstring = s.substr(i,k);
          if (hash[currentSubstring]) {
              if (hash[currentSubstring] === 1) {
                  result.push(currentSubstring)
                  hash[currentSubstring] += 1;
              }
          } else {
              hash[currentSubstring] = 1;
          }
      }
  }
  return result;
}