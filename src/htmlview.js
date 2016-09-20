/*
 * The HTMLView component renders a string containing some HTML. Beware of XSS attacks.
 */
function HTMLView(html) {
    // rendering function
    function render(h) {
        return h('div.htmlview', { innerHTML: html });
    }

    return {
        render: render
    };
}

module.exports = HTMLView;
