function reverseWords(sentence) {
  // Your code will replace the placeholder return statement.
  let rev = sentence.split(' ').filter(x => x.length > 0).reverse().join(' ');
  return rev;
}

console.log(reverseWords('hello world'))
console.log(reverseWords('hello    world'))
console.log(reverseWords('  hello   world  '))
console.log(reverseWords('   hello world'))
