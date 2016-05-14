const {model, value} = require('duet');
const {setItem} = require('duet/bridges/local-storage');

module.exports = (initialState) => {
    const count = value(initialState != null ? parseInt(initialState, 10) : 0);

    count(function (state) {
        setItem('count', state);
    });

    return model({
        count: count
    });
};
