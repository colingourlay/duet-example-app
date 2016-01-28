const duet = require('duet');
const app  = require('./app');

duet(app, 'body', {
    // forceSingleThread: true,
    isDebug: true
});
