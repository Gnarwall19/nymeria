const {
    guarantee,
    check,
    group,
    beforeAll,
    beforeEach
} = require('nymeria');

let a;

beforeAll(() => {
    a = {
        something: '4'
    };
});

group('playing with the beforeAll function', () => {
    let b;

    beforeAll(() => {
        b = {
            something: '4'
        };
    });
    check('If a and b are deeply identical', () => {
        guarantee.deeplyIdentical(a, b);
    });
    check('If b.something == 4', () => {
        guarantee.identical(b.something, 4);
    });
});