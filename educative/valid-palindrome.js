/**
 * 
 * @param {string} s String
 * @returns boolean
 * @description Checks if a string is a valid pallindrom 
 * with atmost one removal.
 */
function isPalindrome(s) {
    
  let left = 0, right = s.length-1, d = 0;
  while(left < right) {
    if (s[left] != s[right]) {
      if (d > 0) return false;
      d++
      if(s[left+1] == s[right]) {
        left = left+1
      } else if(s[right-1] == s[left]){
        right = right-1
      } else return false;
    } 
    left++
    right--
  }
  return d < 2 ? true: false;
  // Tip: You may use the code template provided
  // in the two_pointers.js file
}


console.log(isPalindrome('abbcca'))
console.log(isPalindrome("dead"))
console.log(isPalindrome("tebbem"));