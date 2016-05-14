const duet = require('duet');
const app  = require('./app');

duet(app, 'body', {
    bridges: [
        require('duet/bridges/csjs'),
        require('duet/bridges/local-storage')
    ],
    // forceSingleThread: true,
    isDebug: true
});
