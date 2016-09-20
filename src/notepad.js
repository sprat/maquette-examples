/*
 * The Notepad component implements a simple text area whose content is persisted in the local storage of the
 * browser and synchronized between browser tabs. It also shows a character counter.
 */
function Notepad() {
    var textValue = new PersistentValue('notepad');

    function render(h) {
        var content = textValue.get() || '';

        var textarea = h('textarea.notepad-text', {
            attrs: {
                placeholder: 'Enter text here...',
                value: content
            }
        });

        textarea.on('input', function (event) {
            textValue.set(event.target.value);
            h.update();
        });

        var counter = h('div.counter', [
            'Length: ',
            h('span.counter-value', [content.length])
        ]);

        return h('div.notepad', [textarea, counter]);
        // TODO: hook textValue.onChangeHook(h.update)
    }

    return {
        render: render
    };
}


/*
 * Utility class to persist a value in the localStorage
 *
 * It also implements a hook in order to receive storage events from the localStorage
 */
function PersistentValue(key, storage) {
    storage = storage || localStorage;

    function get() {
        return storage.getItem(key);
    }

    function set(data) {
        storage.setItem(key, data);
    }

    function onChangeHook(callback) {
        function storageListener(event) {
            if ((event.storageArea === storage) && (event.key === key)) {
                callback();
            }
        }

        return {
            create: function() {
                window.addEventListener('storage', storageListener);
            },
            remove: function(vnode, remove) {
                window.removeEventListener('storage', storageListener);
                remove();
            }
        };
    }

    return {
        get: get,
        set: set,
        onChangeHook: onChangeHook
    };
}

module.exports = Notepad;
