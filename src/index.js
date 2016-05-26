const console = require('console');
const duet    = require('duet');
const csjs    = require('duet-csjs/channel');
const storage = require('duet-local-storage/channel');
const vdom    = require('duet-virtual-dom/channel');
const app     = require('./app');

const options = {
    // forceShim: true,
    logger: console.debug.bind(console)
};

duet([csjs, storage, vdom], app, options);
