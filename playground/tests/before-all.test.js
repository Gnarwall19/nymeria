const {
    guarantee,
    check,
    group,
    beforeAll
} = require('nymeria');

let a;

beforeAll(() => {
    a = {
        something: 'example'
    };
});

group('playing with the beforeAll function', () => {
    let b;

    beforeAll(() => {
        b = {
            something: 'example'
        };
    });
    check('some test', () => {
        guarantee.deeplyIdentical(a, b);
    });
    check('another test', () => {
        guarantee.identical(11, 11);
    });
});