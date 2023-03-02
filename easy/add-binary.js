// const simpleBinary = (a,b,c) => {
//   if (a == 1 && b == 1 && c == 1) {

//   }
// }

var addBinary = function(a, b) {
  let l1 = a.length, l2 = b.length, c = 0, r = '', maxLength = Math.max(l1, l2);
  for(let i = 1; i <= maxLength; i++) {
      let c1 = a.length-i >= 0 ? a[a.length-i] : 0;
      let c2 = b.length-i >= 0 ? b[b.length-i] : 0;
      let temp = c1 ^ c2
      r = (temp ^ c) + r;
      c = +c1 + +c2 + c > 1 ? 1 : 0
  } 
  if (c) r = c + r;
  console.log(r);
  return r;
};

addBinary("1010", "1011")