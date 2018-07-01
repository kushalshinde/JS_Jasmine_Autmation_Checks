//NESTING

describe('Outer Group', function () {
    describe('Inner Test 1', function () {
        it('tests 7 to 7', function () {
            expect(7).toBe(7);
        });
    });

    describe('Inner Test 2', function () {
        it('tests 9 to 9', function () {
            expect(9).toBe(9);
        });
    });
});