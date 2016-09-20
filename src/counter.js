/*
 * The Counter component shows a simple integer value with +/- buttons around it
 * for incrementing or decrementing the value
 */
function Counter() {
    var value = 0;

    function increment() {
        value += 1;
    }

    function decrement() {
        value -= 1;
    }

    function get() {
        return value;
    }

    function render(h) {
        var incrementButton = h('button.counter-incr', { onclick: increment }, '+');
        var decrementButton = h('button.counter-decr', { onclick: decrement }, '-');
        var valueSpan = h('span.counter-value', value);

        return h('div.counter', [
            decrementButton,
            ' ',
            valueSpan,
            ' ',
            incrementButton
        ]);
    }

    return {
        get: get,
        increment: increment,
        decrement: decrement,
        render: render
    };
}

module.exports = Counter;
