import { createStore } from 'redux';

// Reducer
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
    return state;
};

// Store
const store = createStore(counterReducer);

export default store;
// This allows other components to have access to the store.
// The subscription and dispatch will be placed in various components.