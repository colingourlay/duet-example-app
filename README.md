# duet example app

A simple counter app, built using [duet](https://github.com/colingourlay/duet).

## What?

A **duet** app's concerns are separated into two threads, the "app" and the "user" (playing a *duet*, if you pardon the pun).

The **app** (worker) thread contains all of your own code. You initialise this thread by letting **duet** know about your **view** (a function which converts state into a virtual DOM, with event bindings) and **model** (to which you can subscribe to state updates).

In this thread, **duet** takes on the responsibility of recreating the view when you update your model, and relaying DOM patching instructions to the main thread. It also relays any CSS modules you access to the main thread so that their styles are available to your components.

The **user** (main) thread accepts patches from the **app**, and updates the DOM. This thread will initilaise itself, provided the app's container element exists.

In this thread, **duet** takes on the responsibility of updating any DOM as patches are recieved, and relaying events that correspond to handlers in your view, back to the **app**.

## How?

A **duet** app is contained entirely inside a single JavaScript file, which is re-evaluated as a web worker. The magic happens when, depending on the environment, the script's execution forks and takes on its relevant responsibilities.

In browsers that don't support web workers, the worker thread and API is mocked, and the entire app will work inside the main thread, without your intervention.

## Getting started

1. Install dependencies and start development server:

    ```sh
    $ npm install
    $ npm run dev
    ```

    or:

    ```sh
    $ npm start
    ```

2. Visit [http://localhost:8000](http://localhost:8000)

3. Open your browser's developer console and watch the messages fly.

    * Messages sent from the app (worker) thread to the user (main) thread are:
        * `DOM::PATCH`: A patch for the DOM, resulting from the creation of a new virtual DOM that es made every time you update the app's state.
        * `CSJS::STYLES`: A block of styles, resulting from the import of a CSJS module inside a component. These blocks will be written as separate stylesheets in the `document.head`.
        * `LOCAL_STORAGE::REQUEST`: A key to be read from localStorage, with reference to an async handler for the value, or a key & value to be written.
    * Messages sent from the user thread to the app thread are:
        * `INIT`: The app's container element exists, and is ready to start recieving patches.
        * `DOM::EVENT`: A DOM event which corresponds to an event handler created while rendering your app's virtual DOM. If the element is a control, its value will also be passed through.
        * `LOCAL_STORAGE::RESPONSE`: A value which has been read, along with the async handler reference.


## Suggestions

* In `src/index.js`, comment out the `isDebug` option to disable debug messages
* In `src/index.js`, un-comment the `forceSingleThread` option to run the entire app in the main thread, to simulate how browsers without web worker support will perform.
* Create a production build of the app commenting out both options in `src/index.js`, then running:

    ```sh
    $ npm run build
    ```

    This will remove source maps and minify your entry script, showing how small the app's footprint actually is (especially when gzipped).
