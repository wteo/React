import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

// REDUCER
const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({ 
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            // here you can mutate state
            // all reducers here will automaticaly receive the latest state
            state.counter++;
            // Toolkit will automatically clone existing state and create another state with it to replace the existing ones we haves
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

// STORE
const store = configureStore({
    reducer: counterSlice.reducer
});

// ACTION
export const counterActions = counterSlice.actions;
// This will automatically create action objects/indetifiers

export default store;
// In React, you need first to export store. 
// The subscription and dispatch will be placed in various components.