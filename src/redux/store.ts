import { configureStore } from "@reduxjs/toolkit";
import question from "./reducer/question";
import { createStore, combineReducers } from "redux";

export const store = configureStore({
  reducer: {
    question,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
