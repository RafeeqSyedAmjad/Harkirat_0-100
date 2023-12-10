/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Regular expression to match vowels (both lowercase and uppercase) globally and ignoring case
  const reg = /[aeiou]/gi;

  // Use match() to find all vowels in the string based on the regex
  const vowels = str.match(reg);

  // Check if vowels exist and return the count; if not, return 0
  return vowels ? vowels.length : 0;
}

module.exports = countVowels;