import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { bookingApi } from "../Service/bookingOperation";
import { adminUserApi } from "../Service/adminUserOperation";

export const store = configureStore({
    reducer: {
        [bookingApi.reducerPath]: bookingApi.reducer,
        [adminUserApi.reducerPath]: adminUserApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        bookingApi.middleware, 
        adminUserApi.middleware
        ),//providing all features of RTK query
})

setupListeners(store.dispatch) //enable refetch feature
