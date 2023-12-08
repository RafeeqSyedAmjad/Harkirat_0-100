/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Remove non-alphanumeric characters and convert strings to lowercase
  const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();

  // Check if the lengths are different after cleaning
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Function to sort characters in a string
  const sortString = (str) => str.split('').sort().join('');

  // Sort the cleaned strings and compare
  const sortedStr1 = sortString(cleanStr1);
  const sortedStr2 = sortString(cleanStr2);

  // Return true if the sorted strings are equal (anagrams), false otherwise
  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
