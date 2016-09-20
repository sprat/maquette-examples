var MountPoint = require('./mountpoint');
var Application = require('./application');
var Page = require('./page');
var HTMLView = require('./htmlview');
var Counter = require('./counter');
var Notepad = require('./notepad');

function run() {
    var node = document.getElementById('application');
    var aboutHTML = node.innerHTML;

    // create a mount point for the Application component
    var mountPoint = MountPoint(node);

    // create some pages
    var about = Page('About', HTMLView(aboutHTML));
    var counter = Page('Counter', Counter());
    var notepad = Page('Notepad', Notepad());

    // create the application component
    var title = document.querySelector('title').textContent;
    var application = Application(title, [about, counter, notepad]);

    // mount the Application in the mount point
    mountPoint.mount(application);
}

module.exports = {
    run: run
};
