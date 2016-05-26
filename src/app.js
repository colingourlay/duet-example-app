const sendAction = require('send-action');
const storage    = require('duet-local-storage');
const vdom       = require('duet-virtual-dom');
const view       = require('./view');

module.exports = () => {
    const update = vdom('body');

    const send = sendAction({
        onaction: (params, state) => {
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
            storage('count', state.count);
        },
        state: {
            count: 0
        }
    });

    storage('count', (count) => {
        send('set', {value: +count});
    });
};
