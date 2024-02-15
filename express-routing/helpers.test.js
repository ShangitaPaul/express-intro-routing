// Import functions from helpers.js
const {
  findMean,  // Function to calculate the mean (average) of an array
  findMedian, // Function to calculate the median (middle value) of an array
  findMode, // Function to calculate the mode (most frequent value) of an array
} = require("./helpers");

// Test for findMedian function
describe("#findMedian", function(){
  // Test case: Computes the median for an array with even number of elements
  it("Computes the median for an even-sized array", function(){ 
    // Assertion: Expects the median of [1, -1, 4, 2] to be 1.5
    expect(findMedian([1, -1, 4, 2])).toEqual(1.5)
  })

  // Test case: Computes the median for an array with odd number of elements
  it("Computes the median for an odd-sized array", function () { 
    // Assertion: Expects the median of [1, -1, 4] to be 1
    expect(findMedian([1, -1, 4])).toEqual(1)
  })
})

// Test for findMean function
describe("#findMean", function () {
  // Test case: Computes the mean for an empty array
  it("Computes the mean for an empty array", function () { 
    // Assertion: Expects the mean of an empty array to be 0
    expect(findMean([])).toEqual(0)
  })

  // Computes the mean for a non-empty array
  it("Computes the mean for a non-empty array", function () { 
    // Assertion: Expects the mean of [1,-1,4,2] to be 1.5
    expect(findMean([1,-1,4,2])).toEqual(1.5)
  })
})

// Test to find findMode function
describe("#findMode", function () {
  // Test case: Computes the mode for an array with a mode
  it("Computes the mode for an array with a mode", function () { 
    // Assertion: Expects the mode of [1,1,1,2,2,3] to be 1
    expect(findMode([1,1,1,2,2,3])).toEqual(1)
  })
})
