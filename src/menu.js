/*
 * The menu component shows a list of items horizontally, with a selected item highlight
 */
function Menu(items, onItemSelected) {
    var selectedItem;

    function selectItem(name) {
        selectedItem = name;
        if (onItemSelected) {
            onItemSelected(name);
        }
    }

    function render(h) {
        return h('div.menu', items.map(function (item) {
            var selectedClass = (item === selectedItem) ? '.selected' : '';
            return h('a.menu-item' + selectedClass, item).on('click', function() {
                selectItem(item);
                h.update();
            });
        }, this));
    }

    // select the first item by default
    selectItem(items[0]);

    return {
        selectItem: selectItem,
        render: render
    };
}

module.exports = Menu;
