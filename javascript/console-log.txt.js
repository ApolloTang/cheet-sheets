


console.log(todos) // eslint-disable-line no-console


/* eslint-disable no-console */
    if (!console.group) {

        // Dispatch

    } else {
        console.group('GROUPTYPE');
            console.log('%c prev state', 'color: gray', prevState);
            console.log('%c action', 'color: blue', action);

            // Dispatch

            console.log('%c next state', 'color: green', store.getState());
        console.groupEnd('GROUPTYPE');
    }

/* eslint-enable no-console */
