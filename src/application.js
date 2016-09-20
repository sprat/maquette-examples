var Menu = require('./menu');

function Application(title, pages) {
    var components = {};
    var menuItems = pages.map(function (page) {
        var name = page.name;
        components[name] = page.component;
        return name;
    });

    var menu = Menu(menuItems);
    var content = components[menu.selectedItem];

    menu.onItemSelected.add(function (name) {
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
