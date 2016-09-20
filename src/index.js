var MountPoint = require('./mountpoint');
var Application = require('./application');
var Page = require('./page');
var Counter = require('./counter');
var Notepad = require('./notepad');
//var HTMLView = require('./htmlview');

function run() {
    var node = document.getElementById('application');

    // create a mount point for the Application component
    var mountPoint = MountPoint(node);

    // create some pages
    //var about = Page('About', HTMLView(contentHTML));
    var counter = Page('Counter', Counter());
    var notepad = Page('Notepad', Notepad());

    // create the application component
    var application = Application('DOMned', [counter, notepad]);

    // mount the Application in the mount point
    mountPoint.mount(application);
}

module.exports = {
    run: run
};
