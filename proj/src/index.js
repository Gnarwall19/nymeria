// use 'check' to wrap assertions into unit tests
// like 'it' in Jasmine
const colors = require('colors');

const summary = {
    pass: 0,
    fail: 0,
    disabled: 0
}

const group = (title, cb) => {
    console.log(`\n⇨ ${title}`.yellow);
    cb();
}

const check = (title, cb) => {
    try {
        cb();
        console.log(`${' OK '.bgGreen.black} ${title.green}`);
        summary.pass++;
    } catch (e) {
        console.log(`${' FAIL '.bgRed.black} ${title.red}`);
        console.log(e.stack.red);
        summary.fail++;
    }
};

const xcheck = (title, cb) => {
    console.log(`${' DISABLED '.bgWhite.black} ${title.gray}`);
    summary.disabled++;
};

const guarantee = (val) => {
    if (val) return true;

    throw new Error('Assertion Failed');
};

const end = () => {
    console.log(`\n...............\n`.rainbow);
    console.log('Test summary:\n');
    console.log(`  Pass: ${summary.pass}`.green);
    console.log(`  Fail: ${summary.fail}`.red);
    console.log(`  Disabled: ${summary.disabled}\n`.gray);
    console.log(`\n...............\n`.rainbow);

    if (summary.fail > 0) process.exit(1);
    process.exit(0);
};

module.exports = {
    guarantee,
    check,
    xcheck,
    group,
    end
};