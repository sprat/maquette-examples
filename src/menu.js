/*
 * The menu component shows a list of items horizontally, with a selected item highlight
 */
function Menu(items, onItemSelected) {
    var selectedItem;

    function select(name) {
        selectedItem = name;
        if (onItemSelected) {
            onItemSelected(name);
        }
    }

    function onclick(event) {
        var item = event.target.textContent;
        select(item);
    }

    function render(h) {
        var renderedItems = items.map(function (item) {
            var classes = {
                selected: (item === selectedItem)
            };
            return h('a.menu-item', { classes: classes }, item);
        });
        return h('div.menu', { onclick: onclick }, renderedItems);
    }

    // select the first item by default
    select(items[0]);

    return {
        select: select,
        render: render
    };
}

module.exports = Menu;
