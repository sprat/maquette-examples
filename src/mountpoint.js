var maquette = require('maquette');
var h = maquette.h;

function MountPoint(node) {
    var projector = maquette.createProjector();
    var update = projector.scheduleRender;
    var _render;

    function mount(component) {
        _render = function renderRoot() {
            return component.render(h);
        };

        projector.replace(node, _render);
    }

    function unmount() {
        projector.detach(_render);
        _render = undefined;
    }

    return {
        mount: mount,
        unmount: unmount,
        update: update
    };
}

module.exports = MountPoint;
