// use 'check' to wrap assertions into unit tests
// like 'it' in Jasmine
const colors = require('colors');

const check = (title, cb) => {
    try {
        cb();
        console.log(`${' OK '.bgGreen.black} ${title.green}`);
    } catch (e) {
        console.log(`${' FAIL '.bgRed.black} ${title.red}`);
        console.log(e.stack.red);
    }
};

const guarantee = (val) => {
    if (val) return true;

    throw new Error('Assertion Failed');
};

module.exports = {
    guarantee,
    check
};