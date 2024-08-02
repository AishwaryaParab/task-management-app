import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import { localStorageMiddleware } from "./localStorageMiddleware";

export const store = configureStore({
    reducer: {
        tasks: taskReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)
})