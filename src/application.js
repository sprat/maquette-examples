var Menu = require('./menu');

function Application(title, pages) {
    var components = {};
    var content;

    var menuItems = pages.map(function (page) {
        var name = page.name;
        components[name] = page.component;
        return name;
    });

    // TODO: don't pass a callback here but allow us to declare an event handler in the render function...
    var menu = Menu(menuItems, function (name) {
        content = components[name];
    });

    function render(h) {
        return h('div.application', [
            h('h1.title', title),
            menu.render(h),
            h('div.content', content.render(h))
        ]);
    }

    return {
        render: render
    };
}

module.exports = Application;
