const {css}     = require('duet');
const variables = require('./variables');

module.exports = css`

    .button {
        box-sizing: border-box;
        border: 0;
        border-radius: 0.5em;
        padding: 0 1em;
        background-color: ${variables.blue};
        color: white;
        font-size: 1em;
        line-height: 2em;
        cursor: pointer;
    }

`;
