const {css}     = require('duet');
const styles    = require('../common/styles');
const variables = require('../common/variables');

module.exports = css`

    .root {
        width: 100%;
        text-align: center;
    }

    .count {
        color: ${variables.blue};
        font-size: 8rem;
        line-height: 10rem;
        transition: .25s font-size;
    }

    .bigCount extends .count {
        font-size: 6.5rem;
    }

    .hugeCount extends .count {
        font-size: 5rem;
    }

    .button extends ${styles.button} {
        display: inline-block;
        margin: 0;
        width: 60px;
    }

    /* [1] */
    .decrement extends .button, ${styles.button} {
        background-color: ${variables.red};
    }

    /* [1] */
    .increment extends .button, ${styles.button} {
        background-color: ${variables.green};
    }

`;

 // [1] csjs bug: extending .button should be sufficient
