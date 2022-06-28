// Slices (a.k.a reducer function.)

import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true};

const counterSlice = createSlice({ 
    name: 'counter',
    initialState: initialCounterState,
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

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;