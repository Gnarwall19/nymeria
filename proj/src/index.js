// use 'check' to wrap assertions into unit tests
// like 'it' in Jasmine
const check = (title, cb) => {
    try {
        cb();
        console.log(`OK ${title}`);
    } catch (e) {
        console.log(`FAIL ${title}`);
        console.log(e.stack);
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