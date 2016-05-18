const storage = require('duet/bridges/local-storage');
const vdom = require('duet/bridges/virtual-dom');
const createModel = require('./model');
const view = require('./view');

module.exports = () => {
    storage('count', (initialState) => {
        const model = createModel(initialState);
        const update = vdom('body', view(model()));

        model((state) => update(view(state)));
    });
};
