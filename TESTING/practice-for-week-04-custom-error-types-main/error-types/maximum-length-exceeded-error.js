const ValidationError = require('./validation-error');

class MaximumLengthExceededError extends ValidationError {
  constructor(excessLength) {
    super(`Maximum length exceeded${excessLength ? ` by ${excessLength}` : ''}`);
    this.name = 'MaximumLengthExceededError';
    Error.captureStackTrace(this, MaximumLengthExceededError);
  }
}



// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
