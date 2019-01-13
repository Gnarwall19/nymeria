const {
    guarantee,
    check,
    xcheck,
    group
} = require('nymeria');
const stringUtils = require('../src/string-utils');

// Group: capitalizeFirstLetter method
// Test: capitalizes the first letter of a string
check('capitalizes the first letter of a string', () => {
    guarantee(stringUtils.capitalizeFirstLetter('why so serious?') === 'Why so serious?');
});

// Test: don't change the case of the remaining characters
check('does not change the case of other characters', () => {
    guarantee(stringUtils.capitalizeFirstLetter('why So Serious?') === 'Why So Serious?');
});


// Group: isBlank method
// Test: returns true when passing an empty string
check('returns true when passing an empty string', () => {
    guarantee(stringUtils.isBlank(''));
});

// Test: returns true when passing a string containing only spaces
check('returns true when passing a string containing only spaces', () => {
    guarantee(stringUtils.isBlank('      '));
});

// Test: returns false when passing a non-blank string
check('returns false when passing a non-blank string', () => {
    guarantee(!stringUtils.isBlank('whatever'));
});

// Group: startsWith method
// Test: returns true when it starts with the passed string
check('returns true when it starts with the passed string', () => {
    guarantee(stringUtils.startsWith('Just when I...', 'Just'));
});

// Test: returns false when it contains the passed string, but doesn't start with it
check('returns false when it contains the passed string, but does not start with it', () => {
    guarantee(!stringUtils.startsWith('Just when I...', 'when I'));
});

// Test: returns false when it doesn't contain the passed string
check('returns false when it does not contain the passed string', () => {
    guarantee(!stringUtils.startsWith('Just when I...', 'corleone'));
});