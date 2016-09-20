var maquette = require('maquette');

/* our custom hyperscript function */
function Hyperscript(projector) {
    var h = function() {
        var vnode = maquette.h.apply(null, arguments);
        // TODO: is this helper function really needed?
        vnode.on = function (name, callback) {
            this.properties = this.properties || {};
            this.properties['on' + name] = callback;
        };
        return vnode;
    };

    h.update = projector.scheduleRender;

    return h;
}

function mount(node, render) {
    var projector = maquette.createProjector();
    var h = Hyperscript(projector);
    projector.replace(node, function() {
        return render(h);
    });
}

module.exports = mount;
