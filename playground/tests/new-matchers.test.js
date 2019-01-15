const {
    guarantee,
    check
} = require('nymeria');

check('playing with our new matchers', () => {
    // The original guarantee function still works
    guarantee(123 === 123);
    guarantee.truthy('abc');
    guarantee.falsy(null);
    const a = {
        whatever: 777
    };
    const b = a;
    guarantee.same(a, b);
    guarantee.identical(undefined, null);
    const c = {
        whatever: {
            foo: {
                bar: 'baz'
            }
        }
    };
    const d = Object.assign({}, c);
    guarantee.deeplyIdentical(c, d);

    function boom() {
        throw new Error('Some error...');
    }
    guarantee.throws(boom);
    guarantee.throws(boom, 'Some error...');
});