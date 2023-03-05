function isPalindrome(s) {
  // Your code will replace this placeholder return statement.
  // Tip: You may use the code template provided
  // in the two_pointers.js file
  let length = s.length, ll = 0, rh = length-1, lh = 0, rl = 0;
  if (length % 2 === 0) {
    lh = (length / 2) - 1
    rl = lh + 1;
  } else {
    lh = (length - 1) / 2
    rl = lh;
  }
  while(ll <= lh && rl <= rh) {
    if (s[ll++] != s[rh--] || s[lh--] != s[rl++]) return false;
  }
  return true;
}


console.log(isPalindrome('q'))
console.log(isPalindrome('qaq'))
console.log(isPalindrome('qq'))
console.log(isPalindrome('qqweq'))
console.log(isPalindrome(''))