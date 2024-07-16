import cashReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: cashReducer
})

export default store;