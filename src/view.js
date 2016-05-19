require('./styles');
const dom     = require('./common/dom');
const Counter = require('./Counter');

module.exports = (state, send) => {
    return dom`
        <div>
            <h1>Duet Example</h1>
            ${Counter(state, send)}
        </div>
    `;
};
