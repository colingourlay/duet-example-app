const duet    = require('duet');
const csjs    = require('duet/bridges/csjs');
const storage = require('duet/bridges/local-storage');
const vdom    = require('duet/bridges/virtual-dom');
const app     = require('./app');

const options = {
    // forceSingleThread: true,
    isDebug: true
};

duet([csjs, storage, vdom], app, options);
