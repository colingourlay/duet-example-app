const dom    = require('../common/dom');
const styles = require('./styles');

module.exports = (state, send) => {
    const chars = String(Math.abs(state.count)).length;
    const countClass = chars > 4 ? 'hugeCount' : chars > 3 ? 'bigCount' : 'count';

    return dom`
        <div class="${styles.root}">
            <div class="${styles[countClass]}">${state.count}</div>
            <button class="${styles.decrement}" dataset=${{click: send.event('add', {value: -10})}}>-10</button>
            <button class="${styles.decrement}" dataset=${{click: send.event('add', {value: -1})}}>-1</button>
            <button class="${styles.increment}" dataset=${{click: send.event('add', {value: 1})}}>1</button>
            <button class="${styles.increment}" dataset=${{click: send.event('add', {value: 10})}}>10</button>
        </div>
    `;
}
