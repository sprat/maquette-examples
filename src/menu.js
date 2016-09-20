var Signal = require('min-signal');

/*
 * The menu component shows a list of items horizontally, with a selected item highlight
 */
function Menu(items) {
    var onItemSelected = new Signal();
    var selectedItem;

    function selectItem(name) {
        selectedItem = name;
        onItemSelected.dispatch(name);
    }

    function onclick(event) {
        var item = event.target.textContent;
        selectItem(item);
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
    selectItem(items[0]);

    return {
        get selectedItem() { return selectedItem; },
        set selectedItem(value) { selectItem(value); },
        onItemSelected: onItemSelected,
        render: render
    };
}

module.exports = Menu;
