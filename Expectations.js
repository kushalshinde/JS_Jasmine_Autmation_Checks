//Equality Matcher
//=================
expect(true).toEqual(true);
expect({}).toEqual({});





//Identity Matcher
//=================

// toEqual vs toBe

expect([1,2,3]).toEqual([1,2,3]);  //failure; not the same object
//checks equivalence, and deep comparison

expect([1,2,3]).toBe([1,2,3]);  // success; the same value
//same as ====, make sure that they are the same object

describe('basics', function(){
    it('Equality', function(){
        var a = [1,2,3];
        var b = [1,2,3];

        expect(a).toBe(b);
        expect(a).toEqual(b);
        
    });

});




//Boolean Matcher

expect(true).toBeTruthy();
expect(12).toBeTruthy();
expect({}).toBeTruthy(); // empty object is true
expect(false).toBeFalsy();
expect(null).toBeFalsy();
expect("").toBeFalsy();  //empty String is false and other Strings are not false





//Negative Matcher

expect(this).not.toEqual(that);
expect([]).not.toBe({});





//Contain Matcher

expect([1,2,3,4]).toContain(2);
expect("Hello NYC").toContain("NYC");

var speaker = {name:"Kushal"};
expect([
    {name:"Kushal"},
    {name:"Joe"},
    {name:"Adam"}
]).toContain(speaker);






//Defined and Undefined

expect("Hello!").toBeDefined(); //Success
expect(null).toBeDefined(); //Success
expect(somerandomthing).tobeDefined(); //failure

var somethingElseUndefined;
expect(somethingElseUndefined).tobeUndefined(); //success
expect(2014).toBeUndefined();  //failure
expect(null).toBeUndefined();  //failure




//NULL

expect(null).toBeNull();   //Success
expect(false).toBeNull();  //Failure
expect(somethingUndefined).toBeNull(); //Failure





//Numbers

expect(5).not.toBeNaN();  //Success
expect(0/0).toBeNaN();    //Success
expect(parseInt("Hello")).toBeNaN();  //Success


//Numbers II

expect(8).toBeGreaterThan(5);
expect(5).toBeLessThan(12);
expect("a").toBeLessThan("z");
expect(12.34).toBeCloseTO(12.3, 1);  //1 is a radix (how many decimal points)






//RegEx

expect("Hello STO").toMatch(/Hello/);
expect(message).toMatch(/bar/);
expect(message).toMatch('bar');





//Exception
expect(func).toThrow();

