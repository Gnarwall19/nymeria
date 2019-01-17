const {
    guarantee,
    check,
    xcheck,
    group,
    beforeEach
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
    const w = true;
    guarantee.same(w, true);
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


group("Testing beforeEach", () => {
    var foo = 0;

    beforeEach(() => {

        foo += 1;
    });

    check("if foo will increment to 1", () => {
        guarantee.same(foo, 1);
    });

    check("if foo will increment to 2", () => {
        guarantee.same(foo, 2);
    });

    check("if foo will increment to 3", () => {
        guarantee.same(foo, 3);
    });

    // This seems like a bad test, but I wanted to play with guarantee.throw
    check("if foo will increment to 4 and throw our error", () => {

        if (foo === 4) {
            var anError = () => {
                throw new Error('I made this error throw when everything works CORRECTLY!');
            }
        }
        guarantee.throws(anError, 'I made this error throw when everything works CORRECTLY!');
        // console.log(`foo now equals: ${foo}`);
    });
});