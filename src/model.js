const {model, value} = require('duet/util/model');
const storage = require('duet/bridges/local-storage');

module.exports = (initialState) => {
    const count = value(initialState != null ? parseInt(initialState, 10) : 0);

    count(function (state) {
        storage('count', state);
    });

    return model({
        count: count
    });
};
