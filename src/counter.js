/*
 * The Counter component shows a simple integer value with +/- buttons around it for incrementing or decrementing
 * the value
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
        var incrementButton = h('button.counter-incr', '+');
        var decrementButton = h('button.counter-decr', '-');
        var valueSpan = h('span.counter-value', value);

        incrementButton.on('click', function () {
            increment();  // increment the counter value
            h.update();  // refresh the view
        });

        decrementButton.on('click', function () {
            decrement();  // decrement the counter value
            h.update();  // refresh the view
        });

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
