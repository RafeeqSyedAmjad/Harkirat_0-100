/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  if (numbers.length === 0){
    return undefined; // Return undefined for an empty array
  }

  let largest = numbers[0];   // Assume that the first element is the largest element

  for (let i = 1; i < numbers.length; i++){
    if(numbers[i] > largest){
      largest = numbers[i];   // Update the largest element if a larger one is found
    }
  }
  return largest;
}

module.exports = findLargestElement;