require('./styles');
const {model, value, dom} = require('duet');
const Counter             = require('./Counter');

module.exports = (start) => {

    start(
        (state) => {
            return dom`
                <div>
                    <h1>Duet Example</h1>
                    ${Counter(state)}
                </div>
            `;
        },
        model({
            count: value(0)
        })
    );

};
