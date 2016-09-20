var Application = require('./application');
var Page = require('./page');
//var HTMLView = require('./htmlview');
var Counter = require('./counter');
//var Notepad = require('./notepad');
var mount = require('./mount');

function run() {
    var contentElement = document.getElementById('content');
    //var contentHTML = contentElement.innerHTML;

    // create some pages
    //var about = Page('About', HTMLView(contentHTML));
    var counter = Page('Counter', Counter());
    //var notepad = Page('Notepad', Notepad());

    // create the application component
    var application = Application('DOMned', [counter]);  //[about, counter, notepad]

    // create a view of the application component and mount it in the
    // content element
    mount(contentElement, application.render);
}

module.exports = {
    run: run
};
