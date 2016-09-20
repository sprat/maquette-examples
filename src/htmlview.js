/*
 * The HTMLView component renders a string containing some HTML. Beware of XSS attacks.
 */
function HTMLView(html) {
    // rendering function
    function render(h) {
        // TODO: or modifier: h('div.htmlview').html(html)
        return h('div.htmlview', h.html(html));
    }

    return {
        render: render
    };
}

module.exports = HTMLView;
