'use strict';

const colors = require('colors');
const matchers = require('./matchers');
const nymeria = {
    SILENT: false
};

// Repeat a string n times
const repeat = (str, n) => Array(n).join(str);

// Repeats an indent n times
const indent = n => repeat('    ', n);

// Indents a string with multiple lines
const indentLines = (str, n) => indent(n) + str.replace(/\n/g, `\n${indent(n)}`);

// Runs every beforeEach callback in the stack
const runEveryBeforeEach = () => {
    beforeEachStack.forEach((level) => level.forEach(cb => cb()));
};

// Logs a string to the console
const log = str => !nymeria.SILENT && console.log(str);

// Counters used for summary after execution of test suite is completed
const summary = {
    pass: 0,
    fail: 0,
    disabled: 0
}

// Stack of beforeEach callbacks
const beforeEachStack = [
    []
];

let indentLevel = 0

// Delcares a testing group
const group = (title, cb) => {
    beforeEachStack.push([]);
    indentLevel++;
    console.log(`\n${indent(indentLevel)}⇨ ${title}`.yellow);
    cb();
    indentLevel--;
    beforeEachStack.pop();
};

// Use 'check' to wrap assertions into testing units
// Like 'it' in Jasmine
const check = (title, cb) => {
    runEveryBeforeEach();

    try {
        cb();
        console.log(`${indent(indentLevel + 1)}${' OK '.bgGreen.black} ${title.green}`);
        summary.pass++;
    } catch (e) {
        console.log(`${indent(indentLevel + 1)}${' FAIL '.bgRed.black} ${title.red}`);
        console.log(indentLines(e.stack.red, indentLevel + 1));
        summary.fail++;
    }
};

// Disables a testing unit
const xcheck = (title, cb) => {
    console.log(`${indent(indentLevel + 1)}${' DISABLED '.bgWhite.black} ${title.gray}`);
    summary.disabled++;
};

// The assertion function
const guarantee = (val) => {
    if (val) return true;

    throw new Error('Assertion Failed');
};

// Injects all matchers as properties of our assertion function
Object.assign(guarantee, matchers);

// Prints the test summary and finishes the process with appropriate exit code
const end = () => {
    log(`\n${repeat('.', 60)}\n`.rainbow);
    log('Test Summary:\n'.underline.magenta);
    log(`  Pass: ${summary.pass}`.green);
    log(`  Fail: ${summary.fail}`.red);
    log(`  Disabled: ${summary.disabled}\n\n`.gray);

    if (summary.fail > 0) process.exit(1);
    process.exit(0);
};

// Simple implementation of the beforeAll function
const beforeAll = cb => cb();

// Simple implementation of the beforeEach function
const beforeEach = (cb) => {
    beforeEachStack[beforeEachStack.length - 1].push(cb);
};

// Exports Nymeria's DSL (domain specific language)
const dsl = {
    guarantee,
    check,
    xcheck,
    end,
    group,
    beforeEach,
    beforeAll
};
module.exports = Object.assign(nymeria, dsl);