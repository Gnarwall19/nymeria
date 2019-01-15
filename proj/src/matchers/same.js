/*
same matcher tests if two arguments are exactly the same 
object (reference types) or equal (primative types).
*/

module.exports = (a, b) => {
    if (a === b) return true;

    throw new Error(`The values are NOT the same.\n\nFound: ${a}\nWanted: ${b}`);
};