import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slice/taskSlice";

export const store = configureStore({
    reducer: {
        task: taskReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializableCheck for async thunk
    }),
});