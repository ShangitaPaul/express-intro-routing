// Import the Express framework
const express = require('express');
// Create an instance of the Express application
const app = express();
// Import the custom error handler
const ExpressError = require('./expressError');

// Import necessary functions from the helpers module
const { convertAndValidateNumsArray, findMode, findMean, findMedian } = require('./helpers');

/**
 * Route to calculate the mean of a list of numbers.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Object} - The result of the mean calculation.
 * @throws {ExpressError} - If invalid input is provided.
 */
app.get('/mean', function(req, res, next) {
  // Check if the "nums" query parameter is provided
  if (!req.query.nums) {
    // Throw an error if "nums" query parameter is missing
    throw new ExpressError('Please provide a comma-separated list of numbers via the "nums" query parameter.', 400)
  }
  // Split the "nums" query parameter into an array of strings
  let numsAsStrings = req.query.nums.split(',');
  // Convert and validate the list of numbers
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    // If conversion/validation fails, throw an error
    throw new ExpressError(nums.message);
  }

  // Calculate the mean of the numbers and construct the result object
  let result = {
    operation: "mean",
    result: findMean(nums)
  }

  return res.send(result);
});

/**
 * Route to calculate the median of a list of numbers.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Object} - The result of the median calculation.
 * @throws {ExpressError} - If invalid input is provided.
 */
app.get('/median', function(req, res, next) {
  // Check if the "nums" query parameter is provided
  if (!req.query.nums) {
    // Throw an error if "nums" query parameter is missing
    throw new ExpressError('Please provide a comma-separated list of numbers via the "nums" query parameter.', 400)
  }
  // Split the "nums" query parameter into an array of strings
  let numsAsStrings = req.query.nums.split(',');
  // Convert and validate the list of numbers
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    // If conversion/validation fails, throw an error
    throw new ExpressError(nums.message);
  }

  // Calculate the median of the numbers and construct the result object
  let result = {
    operation: "median",
    result: findMedian(nums)
  }

  return res.send(result);
  
});

/**
 * Route to calculate the mode of a list of numbers.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Object} - The result of the mode calculation.
 * @throws {ExpressError} - If invalid input is provided.
 */
app.get('/mode', function(req, res, next) {
  // Check if the "nums" query parameter is provided
  if (!req.query.nums) {
    // Throw an error if "nums" query parameter is missing
    throw new ExpressError('Please provide a comma-separated list of numbers via the "nums" query parameter.', 400)
  }
  // Split the "nums" query parameter into an array of strings
  let numsAsStrings = req.query.nums.split(',');
  // Convert and validate the list of numbers
  let nums = convertAndValidateNumsArray(numsAsStrings);
  if (nums instanceof Error) {
    // If conversion/validation fails, throw an error
    throw new ExpressError(nums.message);
  }

  // Calculate the mode of the numbers and construct the result object
  let result = {
    operation: "mode",
    result: findMode(nums)
  }

  return res.send(result);

 
});

/**
 * General error handler middleware for handling 404 errors.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Object} - JSON response with error details.
 */
app.use(function (req, res, next) {
  // Create a 404 error
  const err = new ExpressError("Not Found",404);

  // Pass the error to the next piece of middleware
  return next(err);
});

/**
 * General error handler middleware for handling other errors.
 * @param {Object} err - The error object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Object} - JSON response with error details.
 */
app.use(function (err, req, res, next) {
  // Set the HTTP status code to the error status or 500
  res.status(err.status || 500);

  // Send JSON response with error details
  return res.json({
    error: err,
    message: err.message
  });
});

// Start the server on port 3000
app.listen(3000, function() {
  console.log(`Server starting on port 3000`);
});
