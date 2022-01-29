// import { createStore } from "redux";
// import { configureStore, createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter";
import authSlice from "./auth";

// const store = createStore(counterSlice.reducer);

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
