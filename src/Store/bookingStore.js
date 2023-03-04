import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { bookingApi } from "../Service/bookingOperation";

export const store = configureStore({
    reducer: {
        [bookingApi.reducerPath]: bookingApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(bookingApi.middleware),//providing all features of RTK query
})

setupListeners(store.dispatch) //enable refetch feature
