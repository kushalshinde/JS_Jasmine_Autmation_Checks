//SPIES

//"Spy" on a function being invoked

spyOn(translator, "Hello");



var Translator = function(){}; 
var Person = function(){};

Translator.prototype.hello = function(){
    return "Hello";
};

Person.prototype.sayHello = function(trans){
    return trans.Hello();
};

var translator = new Translator,
    person = new Person;

    console.log(person.sayHello(translator));

describe('Person', function(){

    it('uses translator to say "hello"', function(){
        var translator = new Translator;
        var person = new Person;

        spyOn(translator, "Hello");

        person.sayHello(translator);

        expect(translator.hello).toHaveBeenCalled();

    });
});

//We can change the return values for testing

//---------------------------------------------------------------------

//SPY

spy = spyOn(translator, "Hello");
translator.hello();
expect(spy.callCount).toEqual(1);

spyOn(translator, "Hello").andCallFake(mockHello);



// Creating Spices

stub = jasmine.createSpy('stub');
stub('hello');

expect(stub.identity).toEqual('stub');
expect(stub).toHaveBeenCalled();


//-------------------------------------------

// Spies

spyOn(foo, 'setBar');
spyOn(foo, 'setBar').andReturn(123);
spyOn(foo, 'getBar').andCallFake(function() { return 1001; });
foo.setBar(123);

expect(foo.setBar).toHaveBeenCalled();
expect(foo.setBar).toHaveBeenCalledWith(123);
expect(foo.setBar.calls.length).toEqual(2);
expect(foo.setBar.calls[0].args[0]).toEqual(123);


//---------------------------------------------------------------------------


//Event spies

spyOnEvent($('#some_element'), 'click');
$('#some_element').click();
expect('click').toHaveBeenPreventedOn($('#some_element'));
expect('click').toHaveBeenTriggeredOn($('#some_element'));


//---------------------------------------------------------------------------
