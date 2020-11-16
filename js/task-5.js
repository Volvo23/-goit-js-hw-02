function checkForSpam (message) { 
  'use strict';
  let msg = message.toLowerCase();
  if (msg.includes('spam') || msg.includes('sale')) {
  return true;
  }
  return false;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true