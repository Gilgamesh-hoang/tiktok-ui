import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from '../Features/Counter/CounterSlice';

export default configureStore({
    reducer: {
        counter: CounterReducer,
    },
});
