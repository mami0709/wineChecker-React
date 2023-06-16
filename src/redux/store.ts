import { configureStore } from "@reduxjs/toolkit";
import question from "./reducer/question";

// configureStore関数を使ってストアを作成
export const store = configureStore({
  reducer: {
    question,
  },
});

// ストア全体の型
export type RootState = ReturnType<typeof store.getState>;
// dispatch関数の型
export type AppDispatch = typeof store.dispatch;
