//ASYNC

runs(function () {
    expect(this.foo).toEqual(0);
});
waits(1000);

//----------------------------

test('works with promises', () => {
    return new Promise((resolve, reject) => {
        //···
    });
});

//Make your test return a promise.

//------------------------------------------------------------------------



// Check Network Operations
it("can wait for a time", function () {
    var foo = 0;

    runs(function () {
        setTimeout(function () {
            foo = 1;
        }, 250);
    });

    runs(function () {
        expect(foo).toEqual(0);
    });

    waits(1000);

    runs(function () {
        expect(foo).toEqual(1);
    });
});


//----------------------------------------------

//ASYNC

runs(function () {
    expect(this.foo).toEqual(0);
});

waits(1000);

waitsFor(function () { //for network operation
    return true; //wait for this to finish
}, "it didn't work", 3000); //failure parameter and time


//--------------------------------------------------------------------------------