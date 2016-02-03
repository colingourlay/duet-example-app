const {domFor, modelFor} = require('duet');
const styles             = require('./styles');

const dom = domFor(styles);

const add = (model, data) => {
    model.count.set(model.count() + parseInt(data.custom, 10));
}

module.exports = (state) => {
    const model = modelFor(state);
    const digits = String(Math.abs(state.count)).length;

    return dom`
        <div.root>
            <div styleName=${digits > 4 ? 'hugeCount' : digits > 3 ? 'bigCount' : 'count'}>
                ${state.count}
            </div>
            <button.decrement dataset=${{click: model.ev(add, -10)}}>-10</button>
            <button.decrement dataset=${{click: model.ev(add, -1)}}>-1</button>
            <button.increment dataset=${{click: model.ev(add, 1)}}>1</button>
            <button.increment dataset=${{click: model.ev(add, 10)}}>10</button>
        </div>
    `;
}
