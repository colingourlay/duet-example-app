const console = require('console');
const duet    = require('duet');
const csjs    = require('duet-csjs/channel');
const dt      = require('duet-document-title/channel');
const lf      = require('duet-localforage/channel');
const vdom    = require('duet-virtual-dom/channel');
const app     = require('./app');

const options = {
    // forceShim: true,
    logger: console.debug.bind(console)
};

duet([csjs, dt, lf, vdom], app, options);
