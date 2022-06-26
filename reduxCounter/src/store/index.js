import { createStore } from 'redux';

// REDUCER
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

// STORE
const store = createStore(counterReducer);

export default store;
// In React, you need first to export store. 
// The subscription and dispatch will be placed in various components.