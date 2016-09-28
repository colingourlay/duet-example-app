const sendAction  = require('send-action');
const docTitle    = require('duet-document-title');
const localforage = require('duet-localforage');
const vdom        = require('duet-virtual-dom');
const view        = require('./view');

module.exports = () => {
    const update = vdom('body');

    const send = sendAction({
        onaction: (params, currentState) => {
            var state = Object.assign({}, currentState);

            switch (params.type) {
                case 'set':
                    state.count = params.value;
                    break;
                case 'add':
                    state.count += params.value;
                    break;
                default:
                    break;
            }

            return state;
        },
        onchange: (params, state) => {
            update(view(state, send));
            docTitle('duet example [' + state.count + ']');
            localforage.setItem('count', state.count);
        },
        state: {
            count: 0
        }
    });

    localforage.getItem('count').then((count) => {
        send('set', {value: count == null ? 0 : count});
    });
};
