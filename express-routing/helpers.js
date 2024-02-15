/**
 * createFrequencyCounter is a function that builds a frequency counter object from an array; it takes an array and returns an object where keys are the unique elements of the input array, and values represent how many times each element appears in the array.
 * 
 * @param {Array} arr - The input array from which the frequency counter will be created.
 * @returns {Object} - The frequency counter object.
 */
function createFrequencyCounter(arr) {
  return arr.reduce(function(acc, next) {
    // Increment the count for the current element in the accumulator
    acc[next] = (acc[next] || 0) + 1;
    return acc;
  }, {});
}

/**
 * findMode - Is the function that calculates the mode/most frequent element of an array.
 * It utilizes the createFrequencyCounter function to generate a frequency counter object,
 * It iterates over the object to find the element with the highest frequency.
 * 
 * @param {Array} arr - The input array to calculate all mode elements 
 * @returns {number} - The most common element in the array.
 */
function findMode(arr) {
  let freqCounter = createFrequencyCounter(arr);

  let count = 0;
  let mostFrequent;

  for (let key in freqCounter) {
    // Check if the frequency of the current element is greater than the current count
    if (freqCounter[key] > count) {
      mostFrequent = key;
      count = freqCounter[key];
    }
  }

  // Convert the most frequent element to a number and return
  return +mostFrequent;
}

/**
 * convertAndValidateNumsArray is a function that onverts an array of strings to an array of numbers by converting each element of the input array from a string to a number
 * 
 * It should return an array of numbers, OR returns an error object.
 * 
 * @param {Array} numsAsStrings - The array of strings to be converted to numbers.
 * @returns {Array|Error} - An array of numbers or an error object if conversion fails.
 */
function convertAndValidateNumsArray(numsAsStrings) {
  let result = [];

  for (let i = 0; i < numsAsStrings.length; i++) {
    let valToNumber = Number(numsAsStrings[i]);

    // Check if the value is a valid number
    if (Number.isNaN(valToNumber)) {
      return new Error(
        `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
      );
    }

    // Push the converted number to the result array
    result.push(valToNumber);
  }
  return result;
}

/**
 * findMean is a function that calculates the mean of an array of numbers by adding them together divided by total amount of numbers.
 * 
 * @param {Array} nums - The array of numbers for which the mean will be calculated.
 * @returns {number} - The mean value of the array.
 */
function findMean(nums){
  // If array is empty, return 0 to avoid division by zero
  if(nums.length === 0) return 0;

  // Calculate the sum of all numbers and divide by the total count
  return nums.reduce(function (acc, cur) {
    return acc + cur;
  }) / nums.length;
}

/**
 * findMedian is the function that calculates the median/middle of an array of numbers by sorting the array to find the middle element. It can also find the average of the two middle elements if the length of the array is even.
 * 
 * @param {Array} nums - The array of numbers for which the median will be calculated.
 * @returns {number} - The median value of the array.
 */
function findMedian(nums){
  // Sort the array in ascending order
  nums.sort((a, b) => a - b);

  let middleIndex = Math.floor(nums.length / 2);
  let median;

  // If the array length is even, take the average of the two middle elements
  if (nums.length % 2 === 0) {
    median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
  } else {
    // If the array length is odd, take the middle element
    median = nums[middleIndex];
  }
  return median;
}

// Export functions to be used in other modules
module.exports = {
  createFrequencyCounter,
  findMean,
  findMedian,
  findMode,
  convertAndValidateNumsArray
};
