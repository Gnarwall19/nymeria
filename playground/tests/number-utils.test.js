const {
    guarantee,
    check
} = require('nymeria');

const numberUtils = require('../src/number-utils');

// Group: isPrime method
// Test: returns true for prime numbers
check('returns true for prime numbers', () => {
    guarantee(numberUtils.isPrime(2));
    guarantee(numberUtils.isPrime(3));
    guarantee(numberUtils.isPrime(5));
    guarantee(numberUtils.isPrime(7));
    guarantee(numberUtils.isPrime(23));
});

check('this test should fail', () => {
    guarantee(123 === 321); // should fail
});

// Test: returns false for non-prime numbers
check('returns false for non-prime numbers', () => {
    guarantee(!numberUtils.isPrime(4));
    guarantee(!numberUtils.isPrime(8));
    guarantee(!numberUtils.isPrime(10));
    guarantee(!numberUtils.isPrime(20));
});