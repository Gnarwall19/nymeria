/* 
identical matcher verifies that two arguments are equivalent
*/

module.exports = (a, b) => {
    if (a == b) return true;

    throw new Error(`The values are NOT identical.\n\nFound: ${a}\nWanted: ${b}`);
};