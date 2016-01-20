import {domFor, modelFor} from 'duet';
import styles from './styles';

const dom = domFor(styles);

function add(model, data) {
    model.count.set(model.count() + parseInt(data, 10));
}

export default function Counter(state) {
    const model = modelFor(state);
    const digits = String(Math.abs(state.count)).length;

    return dom`
        <div.root>
            <div styleName=${digits > 4 ? 'hugeCount' : digits > 3 ? 'bigCount' : 'count'}>
                ${state.count}
            </div>
            <button.decrement data-click=${model.ev(add, -10)}>-10</button>
            <button.decrement data-click=${model.ev(add, -1)}>-1</button>
            <button.increment data-click=${model.ev(add, 1)}>1</button>
            <button.increment data-click=${model.ev(add, 10)}>10</button>
        </div>
    `;
}
