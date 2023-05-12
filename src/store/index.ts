import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./slices/quizSlice";
import uiSlice from "./slices/uiSlice";

export const store = configureStore({
  reducer: { quizSlice, uiSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
