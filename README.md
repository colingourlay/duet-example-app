# duet example app

A simple counter app, built using [duet](https://github.com/colingourlay/duet).

![screenshot](https://cldup.com/khqvACyB6F.png)

## Getting started

1. Install dependencies and start development server:

```
$ npm install
$ npm run dev
```

2. Visit [http://localhost:8000](http://localhost:8000)

3. Open your browser's developer console and watch the messages fly.

    * Messages sent from the worker (app) thread to the main thread are:
        * `VIRTUAL_DOM::CREATE`: Creates a root node in the DOM, resulting from the creation of a new virtual DOM.
        * `VIRTUAL_DOM::PATCH`: A patch for the DOM, which is sent every time the worker's virtual DOM is updated (due the app state updates).
        * `CSJS::STYLES`: A block of styles, resulting from the import of a CSJS module inside a component. These blocks will be written as separate stylesheets in the `document.head`.
        * `LOCALFORAGE::REQUEST`: A call to [localForage](https://github.com/mozilla/localForage) (either `getItem` or `setItem`) to load/save state, if IndexedDB is not available inside the worker.
    * Messages sent from the main thread to the worker thread are:
        * `VIRTUAL_DOM::EVENT`: A DOM event which corresponds to an event handler created while rendering your app's virtual DOM. If the element is a control, its value will also be passed through.
        * `LOCALFORAGE::RESPONSE`: A response from localForage, along with a reference to a response handler inside the worker so that it can be resolved.

These messages are enabled by channels supplied to duet when it was initialised, and sent when you use their respective modules in the app.

```javascript
const duet = require('duet');
const csjs = require('duet-csjs/channel');
const lf   = require('duet-localforage/channel');
const vdom = require('duet-virtual-dom/channel');
const app  = require('./app');

duet([csjs, lf, vdom], app);
```

This app was built with: [duet-virtual-dom](https://github.com/colingourlay/duet-virtual-dom), [duet-csjs](https://github.com/colingourlay/duet-csjs) and [duet-localforage](https://github.com/colingourlay/duet-localforage), which all provide channels built with [duet-channel](https://github.com/colingourlay/duet-channel).

## Suggestions

* In `src/index.js`, comment out the `logger` option to disable debug messages.
* In `src/index.js`, un-comment the `forceShim` option to force the app to run entirely the main thread, simulating how browsers without web worker support will perform.
* Create a production build of the app commenting out both options in `src/index.js`, then running:

```sh
$ npm run build
```

This will remove source maps and minify your entry script (with [`duet-build`](https://github.com/colingourlay/duet-build)), showing how small the app's footprint actually is (especially when gzipped).
