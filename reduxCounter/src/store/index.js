import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth';

// STORE
const store = configureStore({
    reducer: { 
        auth: authReducer
    }
});

export default store;