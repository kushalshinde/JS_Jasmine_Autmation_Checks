// HTML runner

var jasmineEnv = jasmine.getEnv();
jasmineEnv.updateInterval = 250;

var htmlReporter = new jasmine.HtmlReporter();
jasmineEnv.addReporter(htmlReporter);

$(function() { 
    jasmineEnv.execute();
});
