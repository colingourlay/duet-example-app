require('./styles');
const {dom}   = require('duet');
const Counter = require('./Counter');

module.exports = (state) => {
    return dom`
        <div>
            <h1>Duet Example</h1>
            ${Counter(state)}
        </div>
    `;
};
