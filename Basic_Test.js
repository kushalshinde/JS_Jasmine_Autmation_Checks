/* Jasmine is BBD - Behavior driven framework 
		(instead of Qunit which is Unit level JavaScript framework and it is Cumbersome)

Testing in JavaSctipt
    1. ASync Testing
    2. Testing DOM (Decoupled From JS)
    3. Lots of Browsers and platforms


Unit Testing
    1. Lots of small tests
    2. Tests a specific "unit" of code
    2. Suite tests one small layer of code

TDD in JavaScript
    1. Tests against Specifications
    2. Write Tests
    2. write real code
    3. test
    4. repeat
    5. One test per method

BDD
    1. Behavior driven development
    2. tests at a higher level
    3. one test per group (related functionality)

*/



//Basic Test

describe('Calculator', function(){
    var calc;

    beforeEach(function(){
        calc = new Calculator();
    });


    it('should multiply', function(){
        expect(calc.multiply(6, 7).toBe(42));
    });

});
