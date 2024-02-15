/* 
 * ExpressError allows us to create error instances with an associated status code. We use this with the error-handling middleware to provide error responses.
 */

class ExpressError extends Error {
  /**
   * Creates a new instance of ExpressError with the specified message and status code.
   * @param {string} message - The error message.
   * @param {number} status - The HTTP status code associated with the error.
   */
  constructor(message, status) {
    // Call the parent constructor of Error class
    super();
    // Set the error message
    this.message = message;
    // Set the HTTP status code
    this.status = status;
    // Log the error stack trace to the console
    console.error(this.stack);
  }
}

// Export the ExpressError class for use in other modules
module.exports = ExpressError;
