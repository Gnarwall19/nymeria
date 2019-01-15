/*
truthy matcher passes when the supplied value is truthy
and fails if it is falsy
*/

module.exports = (val) => {
    if (val) return true;

    throw new Error(`The value is FALSY.\nValue: ${val}`);
};