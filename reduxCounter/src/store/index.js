import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

// STORE
const store = configureStore({
    reducer: { 
        counter: counterReducer, 
        auth: authReducer
    }
});

export default store;
// In React, you need first to export store. 
// The subscription and dispatch will be placed in various components.