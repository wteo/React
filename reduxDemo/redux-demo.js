const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
    // Counter will be undefined when store is first initialized.
    // This is why we need to give state parameter a default value.
    return {
        counter: state.counter + 1
    };
};
// reducer func always receives on two parameters: 
//      1. the old/existing state; and 
//      Note: 
//      2. the action that was dispatched
// this reducer func must always return a new state object.
// Note also that the reducer func must be a pure function.

const store = redux.createStore(counterReducer);
// createStore is a method that creates the central data store
// its parameter calls on a reducer function.

// Subscription
// this subscription function does not accept any paraementer
const counterSubscriber = () => {
    const latestState = store.getState();
    // getStore is a method that will give us the latest snapshot of State after it was updated.
    console.log(latestState);
};

store.subscribe(counterSubscriber);
// another method, which makes Redux:
//  i. aware of subscription funct; & 
//  ii. tells it this func should be executed whenever the state changes.
// Redux will execute the suscription function. Hence, there is no need to execute the func yourself.
// Similar to the reducer func, enough to just point at it.

// Action
store.dispatch({ type: 'increment' }); // { counter: 2}
// dispatch() is a method which dispatches an action.
// This causes the reducer function to run again.
// an action is a Javascript object with a type property, which acts as an identifier.
// This identifier should have a unique string.
