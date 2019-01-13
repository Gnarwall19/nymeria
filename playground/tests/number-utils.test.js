const {
    guarantee,
    check,
    xcheck,
    group
} = require('nymeria');

const numberUtils = require('../src/number-utils');

// Group: isPrime method
// Test: returns true for prime numbers
group('number utils', () => {
    group('method: is prime', () => {
        xcheck('returns true for prime numbers', () => {
            guarantee(numberUtils.isPrime(2));
            guarantee(numberUtils.isPrime(3));
            guarantee(numberUtils.isPrime(5));
            guarantee(numberUtils.isPrime(7));
            guarantee(numberUtils.isPrime(23));
        });

        // Test: returns false for non-prime numbers
        check('returns false for non-prime numbers', () => {
            guarantee(!numberUtils.isPrime(4));
            guarantee(!numberUtils.isPrime(8));
            guarantee(!numberUtils.isPrime(10));
            guarantee(!numberUtils.isPrime(20));
        });
    });
});

group('numbers fail test', () => {
    check('this test should fail', () => {
        guarantee(123 === 321); // should fail
    });
});