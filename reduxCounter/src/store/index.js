import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

// REDUCER
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


const initialAuthState = { 
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

// STORE
const store = configureStore({
    reducer: { 
        counter: counterSlice.reducer, 
        auth: authSlice.reducer
    }
});

// ACTION
export const counterActions = counterSlice.actions;
// This will automatically create action objects/indetifiers
export const authActions = authSlice.actions;

export default store;
// In React, you need first to export store. 
// The subscription and dispatch will be placed in various components.