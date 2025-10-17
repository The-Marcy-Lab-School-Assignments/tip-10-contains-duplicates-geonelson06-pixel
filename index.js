/**
 * Write a function named containsDuplicate that takes an array of integers (nums) as input 
 * and returns true if any value appears at least twice in the array, and false if every element is distinct.
 *
 * Problem: Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 *
 * Examples:
 * - containsDuplicate([1,2,3,1]) → true
 * - containsDuplicate([1,2,3,4]) → false  
 * - containsDuplicate([1,1,1,3,3,4,3,2,4,2]) → true
 */

function containsDuplicate(nums) {
  const frequency = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (frequency[num]) {
      frequency[num]++; // increment count by 1
    } else {
      // otherwise, initialize its count to 1
      frequency[num] = 1;
    }

    // If any number’s count is 2 or more, it's a duplicate
    if (frequency[num] >= 2) {
      return true;
    }
  }

  // if loop finishes, all elements were distinct
  return false;
};

// Export the function for testing
module.exports = { containsDuplicate };

// Example usage (commented out to avoid interference with tests)
// console.log(containsDuplicate([1,2,3,1])); // → true
// console.log(containsDuplicate([1,2,3,4])); // → false
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // → true