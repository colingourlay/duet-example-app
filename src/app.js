const {localStorage} = require('duet');
const model = require('./model');
const view = require('./view');

module.exports = (start) => {
    localStorage('count', function (initialState) {
        start(view, model(initialState));
    });
};
