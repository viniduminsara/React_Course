import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = {
    value: 0,
    showCounter: true
}

const initialAuthState = {
    isAuthenticated: false
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.value++;
        },
        decrement(state) {
            state.value--;
        },
        increase(state, action) {
            state.value = state.value + action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

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
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        authSlice: authSlice.reducer,
    }
});

export const counterActions = counterSlice.actions;

export default store;
