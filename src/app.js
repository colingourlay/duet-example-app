const {getItem} = require('duet/bridges/local-storage');
const model = require('./model');
const view = require('./view');

module.exports = (start) => {
    getItem('count', function (initialState) {
        start(view, model(initialState));
    });
};
